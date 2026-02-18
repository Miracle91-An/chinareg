const ham=document.getElementById('hamburger');
const nav=document.getElementById('mobile-nav');
if(ham&&nav){ham.onclick=()=>nav.classList.toggle('open');}

const banner=document.getElementById('cookie-banner');
const accept=document.getElementById('accept-cookies');
if(localStorage.getItem('cookieAccepted')) banner&& (banner.style.display='none');
if(accept){accept.onclick=()=>{localStorage.setItem('cookieAccepted','yes');banner.style.display='none';}}

document.querySelectorAll('[data-modal]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const el=document.getElementById(a.dataset.modal);if(el)el.style.display='grid';}));
document.querySelectorAll('.close').forEach(btn=>btn.onclick=()=>btn.closest('.modal').style.display='none');
window.addEventListener('click',e=>{if(e.target.classList.contains('modal'))e.target.style.display='none';});

let cart=JSON.parse(localStorage.getItem('che_cart')||'[]');
function saveCart(){localStorage.setItem('che_cart',JSON.stringify(cart));}
window.addToCart=(name,price)=>{cart.push({name,price});saveCart();alert(`${name} added to cart`);};

function renderCheckout(){
  const wrap=document.getElementById('cart-items'); if(!wrap) return;
  wrap.innerHTML='';
  let total=0;
  cart.forEach(item=>{total+=item.price; const p=document.createElement('p'); p.textContent=`${item.name} - $${item.price}`; wrap.appendChild(p);});
  document.getElementById('total').textContent=`$${total}`;
}
renderCheckout();

const payForm=document.getElementById('pay-form');
if(payForm){payForm.addEventListener('submit',e=>{e.preventDefault();
 const email=document.getElementById('receipt-email').value;
 const id='CHE-'+Date.now();
 document.getElementById('receipt').innerHTML=`<h3>Payment Successful</h3><p>Receipt ID: ${id}</p><p>Receipt sent to ${email}</p>`;
 cart=[]; saveCart(); renderCheckout();
});}

const momoBtn=document.getElementById('momo-generate');
if(momoBtn){momoBtn.onclick=()=>{document.getElementById('momo-code').textContent='MOMO Prompt: *170*8*CHE#';};}
