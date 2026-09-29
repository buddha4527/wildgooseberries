const header=document.querySelector('.site-header');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));

menuToggle.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',open);
});
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
document.querySelectorAll('.gallery-item').forEach(item=>{
  item.addEventListener('click',()=>{
    lightboxImage.src=item.dataset.full;
    lightboxImage.alt=item.querySelector('img').alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src='';
}
document.getElementById('lightboxClose').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const msg=[
    'Hi Wild Gooseberries! I would like to enquire about a stay.',
    `Name: ${data.get('name')}`,
    `Preferred dates: ${data.get('dates')}`,
    `Guests: ${data.get('guests')}`,
    `Interested in: ${data.get('message')||'Stay package'}`
  ].join('\n');
  window.open('https://wa.me/919562614314?text='+encodeURIComponent(msg),'_blank','noopener');
});
document.getElementById('year').textContent=new Date().getFullYear();
