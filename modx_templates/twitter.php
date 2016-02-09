<?php
$title = 'Привет, мир';
$url = 'http://truemisha.ru?p=1';
$hashtags = 'wp,wordpress';
// обратите внимание, что некоторые из параметров я включил непосредственно в URL
?>
<a href="http://twitter.com/share?text=<?php echo $title; ?>&via=twitterfeed&related=truemisha&hashtags=<?php echo $hashtags ?>&url=<?php echo $url; ?>" title="Поделиться ссылкой в Твиттере" onclick="window.open(this.href, this.title, 'toolbar=0, status=0, width=548, height=325'); return false" target="_parent">Твитнуть</a>
