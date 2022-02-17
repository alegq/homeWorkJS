let text = prompt('Введите текст')
text = text.split(' ')
text.sort(function(a, b){return b.length - a.length;})
alert(text.slice(0,3).join('; '))