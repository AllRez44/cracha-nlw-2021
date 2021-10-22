//Práticas de Escrita de Nomes de Variável:
//  camelCase
//  PascalCase
//  snake_case

function showMeSomething() {
  alert('you got a friend in me')
}

alert('Click Ok, Asshole!')
let acceptTerms = true
const user = {
  name: 'John Doe',
  phone: 131222569,
  acceptTerms
}

//alert(user.name)

const linksSocialMedia = {
  github: 'allrez44',
  youtube: 'UC4swwW_IKEKoiRG8Ctu1VBQ',
  instagram: 'allresenderj',
  facebook: 'allan.gomes.7731',
  twitter: 'AllanResende5',
  discords: 'bio/p/allrez44',
  linkedin: 'in/allan-resende-997757118'
}

function changeUserName() {
  //document.getElementById('userName').textContent = 'All'
  //            ou, tb, pode ser assim:
  userGitHubName.textContent = 'All'
}
changeUserName()

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userGitHubName.textContent = data.name
      userGitHubLogin.textContent = data.login
      userGitHubLink.href = data.html_url
      userGitHubBio.textContent = data.bio
      userGitHubImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
