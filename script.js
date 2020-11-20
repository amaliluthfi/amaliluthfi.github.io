let img = [
      {
            name: 'Shoyo Hinata',
            src: 'https://i.pinimg.com/564x/53/48/f3/5348f3417ef16089c14692f5892d0ed4.jpg',
            desc: 'Hinata adalah seorang yang berambisi kuat untuk mengembangkan kemampuan dirinya di perihal yang dia minati. meski beberapa kalu jatuh, Hinata tetap punya optimisme dalam memandang masa depan'
         
      },
      {
            name: 'Monkey D. Luffy',
            src: 'https://i.pinimg.com/564x/83/c1/86/83c186aeb193484daaddac846f1402ea.jpg',
            desc: 'Monkey D. Luffy , selain punya mimpi yang besar, ia juga punya tekad untuk mendapatkan mimpinya itu. tetapi ia juga tidak akan pernah meninggalkan temannya. baginya teman adalah segalanya.'
      },
      {
            name: 'Naruto Uzumaki',
            src: 'https://i.pinimg.com/564x/69/0a/83/690a83bdb348f7fdbb55d4493d09f0f6.jpg',
            desc: 'Naruto memiliki sifat tidak mudah menyerah, meski ketika kecil ia jarang tidak punya teman dan tidak pintar, namun seiring berjalannya waktu, ia menjadi orang yang kuat dan punya banyak teman, bahkan menjadi pemimpin di desanya.'
            
      },
      {
            name: 'Gon',
            src: 'https://i.pinimg.com/564x/b5/15/01/b515019cd0349ad0cd43cac92885848e.jpg',
            desc: 'Gon memiliki hati yang naif dan bersih selayaknya anak kecil. Baginya, kebaikan adalah hal yang ada di setiap diri manusia. tekadnya yang kuat membuat orang seumurannya punya kekuatan yang hebat'
           
      },
      {
            name: 'Sakura Haruno',
            src: 'https://i.pinimg.com/564x/3a/66/f2/3a66f2d8ac6d54f82342f4c19f3f7211.jpg',
            desc: 'Sakura punya keberanian seorang ninja dan kelembutan seorang perempuan. Dengan kedua tanganya, ia mampu menghancurka lawan sekaligus mampu menyembuhkan luka-luka kawannya.'
           
      },
      {
            name: 'Yumeko Jabami',
            src: 'https://i.pinimg.com/564x/11/f2/34/11f23480cf553a824ec7c00012d4c4f9.jpg',
            desc: 'Yumeko Jabami memiliki kecerdikan dan ketelitian. ia selalu tau bagaimana caranya agar ia selalu menang.'
          
      },
      {
            name: 'Nami',
            src: 'https://i.pinimg.com/564x/83/9a/fe/839afef3b8846b520075c9faa5af82f1.jpg',
            desc: 'Nami punya kecerdikan yang tinggi, ia tahu bagaimana caranya agar terus bertahan hidup dengan caranya sendiri. Karena itu ia sering mendapatkan keberentungan juga.'
          
      },
      {
            name: 'Kiyoko Shimizu',
            src: 'https://i.pinimg.com/564x/74/e3/b7/74e3b795e6992518cc540e577587b024.jpg',
            desc: 'Kiyoko adalah seorang manager yang telaten dan juga perhatian. ia juga mampu bersikap profesional. Meski pendiam dan terilhat cuek, tapi ia sebenarnya peduli. '
          
      },
      {
            name: 'Mikasa Ackerman',
            src: 'https://i.pinimg.com/564x/54/bf/15/54bf15b5ddee1cd5297da7c1c879f48a.jpg',
            desc: 'Mikasa adalah seorang prajurit yang mematikan. tapi di sisi lain, ia punya ketulusan hati untuk lawan jenis. sebagai bucin akut, ia merasa harus melindungi laki-laki yang dicntainya.'
      },
      {
            name: 'Izuku Midoriya',
            src: 'https://i.pinimg.com/564x/a1/72/72/a17272859078e6a2600e8e93b46bdc67.jpg',
            desc: 'Deku adalah seorang yang melankolis, dan naif. ia merasa keadilan harus ditegakkan. Kekuatan yang ia terima dari All Might digunakannya dengan bijak.'
           
      }
]

let randomIndex = Math.floor(Math.random() * 10)
let selectedImage =  img[randomIndex].src
let selectedName = img[randomIndex].name
let selectedDesc = img[randomIndex].desc

document.getElementById("name").innerText = selectedName
document.getElementById("myImg").src= selectedImage
document.getElementById("desc").innerText = selectedDesc
