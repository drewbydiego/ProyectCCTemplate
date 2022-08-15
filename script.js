const $content = document.getElementById('textArea'),
      $btn = document.getElementById('btn'),
      $title = document.getElementById('title');

$btn.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');

    $title.innerHTML = '📗 Copiado!!!'
})