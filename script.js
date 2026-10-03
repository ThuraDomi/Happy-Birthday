
document.querySelectorAll('[data-next]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.getElementById(btn.dataset.next)?.scrollIntoView({behavior:'smooth'});
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const candleButton=document.getElementById('candleButton');
const flame=document.querySelector('.flame');
const finalMessage=document.getElementById('finalMessage');
const petalLayer=document.getElementById('petalLayer');
let wished=false;

candleButton?.addEventListener('click',()=>{
  if(wished)return;
  wished=true;
  flame.style.transition='.35s ease';
  flame.style.opacity='0';
  flame.style.transform='translateY(-10px) scale(.2)';
  setTimeout(()=>{
    finalMessage.classList.add('show');
    for(let i=0;i<70;i++){
      const p=document.createElement('span');
      p.className='petal-piece';
      p.style.left=Math.random()*100+'vw';
      p.style.animationDelay=Math.random()*1.6+'s';
      p.style.animationDuration=(3.4+Math.random()*2.5)+'s';
      petalLayer.appendChild(p);
      setTimeout(()=>p.remove(),7000);
    }
  },450);
});
