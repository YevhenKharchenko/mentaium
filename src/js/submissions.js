document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.querySelector('.submissions-textarea');
  const counter = document.querySelector('.submissions-textarea-counter');
  const maxLength = textarea.getAttribute('maxlength');

  textarea.addEventListener('input', () => {
    const remaining = maxLength - textarea.value.length;
    counter.textContent = `${remaining} characters left`;

    if (remaining <= 20) {
      counter.classList.add('warning');
    } else {
      counter.classList.remove('warning');
    }
  });

  const form = document.getElementById('contact-form');
  const popup = document.getElementById('success-popup');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('form.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.text();
      })
      .then(() => {
        form.reset();
        popup.classList.remove('hidden');
        popup.classList.add('show');

        setTimeout(() => {
          popup.classList.remove('show');
          popup.classList.add('hidden');
        }, 3000);
      })
      .catch(error => {
        console.error('Form error:', error);
      });
  });
});
