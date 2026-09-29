(() => {
  const heads = [...document.querySelectorAll('.head')];
  const status = document.querySelector('#step-status');
  let step = 0;
  const updated = [0, 0, 0, 0];
  function render() {
    heads.forEach((head, i) => {
      const active = step > 0 && (step - 1) % 4 === i;
      head.classList.toggle('active', active);
      head.querySelector('.head-status').textContent = active ? 'Updated' : step ? 'Unchanged' : 'Ready';
      head.querySelector('small').textContent = updated[i] ? `Last written: step ${updated[i]}` : 'Not yet written';
    });
    status.textContent = step ? `Step ${step}: update head ${(step - 1) % 4 + 1}, preserve the other three.` : 'Step 0: all heads start empty.';
  }
  document.querySelector('#next-step').addEventListener('click', () => { updated[step % 4] = ++step; render(); });
  document.querySelector('#reset-demo').addEventListener('click', () => { step = 0; updated.fill(0); render(); });
  document.querySelector('#copy-citation').addEventListener('click', async () => {
    const message = document.querySelector('#copy-status');
    try { await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent); message.textContent = 'Citation copied.'; }
    catch { message.textContent = 'Select and copy the citation below.'; const range = document.createRange(); range.selectNodeContents(document.querySelector('#bibtex')); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); }
  });
})();
