const linksSocialMedia = {
  github: 'allrez44',
  youtube: 'channel/UC4swwW_IKEKoiRG8Ctu1VBQ',
  instagram: 'allresenderj',
  facebook: 'allan.gomes.7731',
  twitter: 'AllanResende5',
  discords: 'bio/p/allrez44',
  linkedin: 'in/allan-resende-997757118'
}

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
