//classe que vai conter a logica dos dados
//comoo os dados vao ser estruturados
//será usado a ideia de herança de POO

export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load(){
    this.entries = [
      {
        login: "AlannaaSilva",
        name: "Alanna Silva",
        public_repos: "15",
        followers: "20",
      },
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "20",
        followers: "100",
      },
    ];
     
  }

  delete(user){
    const filteredEntries = this.entries
      .filter((entry) => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
  }
}

// classe que vai criar a vizualizaçao e eventos do html
 export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {

    this.removeAllTr()
   
    this.entries.forEach((user) =>{
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOK = confirm("Tem certeza que deseja deletar essa linha?");
       if(isOK){
        this.delete(user)
       }
      }

      this.tbody.append(row)
    })

  };



  createRow(){
    const tr = document.createElement('tr')
    tr.innerHTML = `
          <td class="user">
            <img src="https://github.com/Alannaasilva.png" alt="foto de perfil alanna">
            <a href="https://github.com/AlannaaSilva" target="_blank">
              <p> Alanna Silva</p>
              <span>Alannaasilva</span>
            </a>
          </td>
          <td class="repositories"> 
            18
          </td>
          <td class="followers">
            20
          </td>
          <td>
            <button class="remove">&times;</button>
          </td>
      
    `;
    return tr
  }
  removeAllTr(){
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
  
 }