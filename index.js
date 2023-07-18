
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function changeTestimonial(n) {
  currentIndex += n;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  showTestimonial(currentIndex);
}

document.querySelector('.prev').addEventListener('click', () => {
  changeTestimonial(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  changeTestimonial(1);
});

showTestimonial(currentIndex);

const scriptURL = 'https://script.google.com/macros/s/AKfycbw75WFt-hE1pEtPisnMuPsvDHDoUpOsr_zU7Z_hHM5vfiQ8JiHHTYwTwIiSynW0zXOzNA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))

})