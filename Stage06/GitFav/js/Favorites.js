import { GithubUser } from './GithubUser.js'

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  // add(username) {
  //   this.Github
  // }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => entry.login !== user.login)

    this.entries = filteredEntries
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = document.querySelector('.search button')
    
    addButton.onclick = () => {
      const { value } = document.querySelector('.search input')

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = `${user.name}`
      row.querySelector('.user span').textContent = `${user.login}`
      row.querySelector('.user repositories').textContent = `${user.public_repos}`
      row.querySelector('.user followers').textContent = `${user.followers}`

      row.querySelector('.user remove').onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar o usuário?")

        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `<tr>
    <td class="user">
      <img src="https://github.com/Lcsalvs.png" alt="Imagem de Lcsalvs">
      <a href="https://github.com/Lcsalvs" target="_blank">
        <p>Lucas Alves</p>
        <span>/Lcsalvs</span>
      </a>
    </td>
    <td class="repositories">
      5000
    </td>
    <td class="followers">
      8000
    </td>
    <td>
      <button class="remove">Remover</button>
    </td>
    </tr>`

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}

