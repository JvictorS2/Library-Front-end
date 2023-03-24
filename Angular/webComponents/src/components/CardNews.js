class CardNews extends HTMLElement {
    constructor() {
        super();//construtor herda do HTMLElements

        const shadow = this.attachShadow({ mode: "open" })//"criar" variável da shadow DOM, shadow == DOM
        shadow.appendChild(this.build())//metodo do componente
        shadow.appendChild(this.styles())// método da estilização do componente
        

    }

    build() {
        const componentRoot = document.createElement("div");//Criar o elemento principal (contem todas os outros elementos)
        componentRoot.setAttribute("class", 'card');//Adicionar classe

        const cardLeft = document.createElement("div");//Criar elemento 
        cardLeft.setAttribute("class", "card_left");//Adicionar classe

        const cardRight = document.createElement("div");//Criar elemento 
        cardRight.setAttribute('class', 'card_right');//Adicionar classe

        componentRoot.appendChild(cardLeft);//adicionar nó do DOM
        componentRoot.appendChild(cardRight);//adicionar nó do DOM

        const autor = document.createElement('span');//Criar elemento 
        autor.textContent = `By ${this.getAttribute("autor") || "anonnymous"}`;//coletar dado da Prop (atributo)

        const linkTitle = document.createElement('a');//Criar elemento 
        linkTitle.textContent = this.getAttribute('Title');//coletar dado da Prop (atributo)//coletar dado da Prop (atributo)
        linkTitle.href = this.getAttribute('link-url');//coletar dado da Prop (atributo)

        const newsContent = document.createElement('p');//Criar elemento 
        newsContent.textContent = this.getAttribute('content');//coletar dado da Prop (atributo)
        

        cardLeft.append(autor);//adicionar nó do DOM
        cardLeft.append(linkTitle);//adicionar nó do DOM
        cardLeft.append(newsContent);//adicionar nó do DOM

        const picture = document.createElement("img");//Criar elemento 
        picture.src = "https://th.bing.com/th/id/R.b0c473c6aca8e81403e0213954f68432?rik=U1K5pVwK5Ga8bQ&riu=http%3a%2f%2fcdn.bgr.com%2f2015%2f08%2fdarth-vader.jpg&ehk=WClYBWDGx9HXk3E7I7UtpcB7tTPXEpSQ6K7R33O%2bDaU%3d&risl=&pid=ImgRaw&r=0";//modificar Prop (atributo)
        picture.alt = "picture Darth Vader";//modificar Prop (atributo)

        cardRight.appendChild(picture);//adicionar nó do DOM

        return componentRoot;//retornar o elemento 
    }

    styles() {
        const style = document.createElement("style");//criar o elemento style
        style.textContent = `
            *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SegoeUI', sans-serif;
}

.card{
    box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

.card_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    
}

.card_left > span {
   font-weight: 400;
}

.card_left > h1 {
    margin-top: 15px;
    font-size: 25px;
}

.card_left > p {
    color: rgb(70, 70,70)
}

.card_right img{
    height: 198px
}

.card_left a {
    text-decoration: none;
    color: black;
    font-size: 25px;
    font-weight: bold;
    padding-top: 16px;
    
    
}

        `
        return style;//retornar o elemento
    }
}

customElements.define("card-news", CardNews);//nome do componente, a classe de onde ele herda