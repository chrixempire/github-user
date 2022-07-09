let icon = document.getElementById('icon');
let light = document.getElementById('light')
icon.addEventListener('click', function(){
    icon.classList.toggle('bi-moon-fill')
    if(icon.classList.contains('bi-moon-fill')){
        document.body.classList.add('theme')
        light.innerHTML = 'Dark'
    }else{
        document.body.classList.remove('theme')
        light.innerHTML = 'Light'
    }
})
let Name = document.getElementById('name');
let Image = document.getElementById('user-image').src;
let login = document.getElementById('login');
let Bio = document.getElementById('about');
let Date = document.getElementById('joined');
let repo = document.getElementById('repos')
let followers = document.getElementById('followers')
let follow = document.getElementById('following')
let locate = document.getElementById('city')
let blog = document.getElementById('blog')
let twit = document.getElementById('twitter')
let company = document.getElementById('office')








let search = document.getElementById('seen')
search.addEventListener('click', function(){
    let userName = document.getElementById('getUser').value 
    let url = "https://api.github.com/users/" + userName;
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        Date.innerHTML = data.created_at.slice(0, data.created_at.length -10)
        if(data.message){
            console.log("User Not Found")
        }else{
            Name.innerHTML = data.name;
           document.getElementById('user-image').src = data.avatar_url;
           login.innerHTML = `@${data.login}`;
           company.innerHTML = data.company === ''|| data.company === null ? "not available" : data.company;
           twit.innerHTML = data.twitter_username === ''|| data.twitter_username === null ? "not found." : data.twitter_username;
           blog.innerHTML = data.blog === ''|| data.blog === null ? "Blog unavailable." : data.blog;
           locate.innerHTML = data.location === ''|| data.location === null ? "Location not found" : data.location;
           Bio.innerHTML = data.bio === ''|| data.bio === null ? "bio loading..." : data.bio;
           repo.innerHTML = data.public_repos < 10 ? `0${data.public_repos}` : data.public_repos;
           followers.innerHTML = data.followers < 10 ? `0${data.followers}` : data.followers;
           follow.innerHTML = data.following < 10 ? `0${data.following}` : data.following;
        }
    })
})