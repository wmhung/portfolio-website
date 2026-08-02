const API = ""; // same-origin: /api/... (Flask serves this app + API on one domain)
const state = { search:"", type:"", area:"", page:1, perPage:12, totalPages:1 };

const $ = (id) => document.getElementById(id);
const resultsEl=$("results"), metaEl=$("meta"), pagerEl=$("pager"),
      pageInfoEl=$("pageInfo"), prevBtn=$("prev"), nextBtn=$("next");

function debounce(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}

async function loadFilters(){
  try{
    const r=await fetch(`${API}/api/filters`);
    if(!r.ok) throw new Error(r.status);
    const {types,areas}=await r.json();
    for(const t of types){const o=document.createElement("option");o.value=t;o.textContent=t;$("type").appendChild(o);}
    for(const a of areas){const o=document.createElement("option");o.value=a;o.textContent=a;$("area").appendChild(o);}
  }catch(e){/* filters are optional; search still works */}
}

async function loadParks(){
  resultsEl.innerHTML=`<div class="state"><span class="spinner"></span>Loading parks…</div>`;
  pagerEl.hidden=true;
  const q=new URLSearchParams({
    search:state.search, type:state.type, area:state.area,
    page:state.page, per_page:state.perPage,
  });
  try{
    const r=await fetch(`${API}/api/parks?${q}`);
    if(!r.ok) throw new Error("HTTP "+r.status);
    const data=await r.json();
    render(data);
  }catch(e){
    resultsEl.innerHTML=`<div class="state">⚠️ Couldn't reach the API (${e.message}).<br>
      If you're running locally, make sure Flask is up: <code>cd backend && flask run</code></div>`;
    metaEl.textContent="";
  }
}

function render(data){
  state.totalPages=data.totalPages||1;
  metaEl.textContent=`${data.total.toLocaleString()} park${data.total===1?"":"s"} found`+
    (state.search||state.type||state.area?" · filtered":"");
  if(!data.items.length){
    resultsEl.innerHTML=`<div class="state">No parks match your filters. Try clearing the search.</div>`;
    return;
  }
  const grid=document.createElement("div");grid.className="grid";
  for(const p of data.items){
    const c=document.createElement("div");c.className="card";
    c.innerHTML=`<span class="badge">${esc(p.type||"Park")}</span>
      <h4>${esc(p.name||"Unnamed park")}</h4>
      ${p.nameEng?`<div class="eng">${esc(p.nameEng)}</div>`:""}
      <div class="area">${esc(p.area||"Taipei")}</div>`;
    c.onclick=()=>openDetail(p.id);
    grid.appendChild(c);
  }
  resultsEl.innerHTML="";resultsEl.appendChild(grid);
  pagerEl.hidden=false;
  pageInfoEl.textContent=`Page ${data.page} of ${state.totalPages}`;
  prevBtn.disabled=data.page<=1;
  nextBtn.disabled=data.page>=state.totalPages;
}

async function openDetail(id){
  const overlay=$("overlay");
  $("modalBody").innerHTML=`<div class="state"><span class="spinner"></span>Loading…</div>`;
  $("mType").textContent="";$("mName").textContent="";$("mEng").textContent="";
  overlay.classList.add("show");
  try{
    const r=await fetch(`${API}/api/parks/${encodeURIComponent(id)}`);
    if(!r.ok) throw new Error("HTTP "+r.status);
    const p=await r.json();
    $("mType").textContent=p.type||"Park";
    $("mName").textContent=p.name||"Unnamed park";
    $("mEng").textContent=p.nameEng||"";
    const facts=[
      ["District",p.area],["Location",p.location],
      ["Opening",[p.openStart,p.openEnd].filter(Boolean).join(" – ")],
      ["Land area",p.landArea],["Phone",p.phone],["Transit",p.transit],
      ["Facilities",p.service],["Recreation",p.recreation],
    ].filter(([,v])=>v&&String(v).trim());
    $("modalBody").innerHTML=
      (p.overview?`<p class="overview">${esc(p.overview)}</p>`:"")+
      `<div class="facts">${facts.map(([l,v])=>
        `<div class="fact"><span class="label">${l}</span><span class="value">${esc(v)}</span></div>`).join("")}</div>`;
  }catch(e){
    $("modalBody").innerHTML=`<div class="state">⚠️ Couldn't load this park (${e.message}).</div>`;
  }
}
function closeModal(){$("overlay").classList.remove("show");}

function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}

// events
$("search").addEventListener("input",debounce(e=>{state.search=e.target.value.trim();state.page=1;loadParks();},300));
$("type").addEventListener("change",e=>{state.type=e.target.value;state.page=1;loadParks();});
$("area").addEventListener("change",e=>{state.area=e.target.value;state.page=1;loadParks();});
prevBtn.addEventListener("click",()=>{if(state.page>1){state.page--;loadParks();window.scrollTo(0,0);}});
nextBtn.addEventListener("click",()=>{if(state.page<state.totalPages){state.page++;loadParks();window.scrollTo(0,0);}});
$("modalClose").addEventListener("click",closeModal);
$("overlay").addEventListener("click",e=>{if(e.target===$("overlay"))closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

// go
loadFilters();
loadParks();
