import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      type: '---',
      scrolling: false
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ type: e.type, scrolling: true });
    setTimeout(() => {
      this.setState({ scrolling: false });
      console.log(this.state.scrolling);
    }, 1000);
    console.log(this.state.scrolling);
  }

  render() {
    const boxStyle = {
      width: '200px',
      height: '200px',
      color: 'red',
      backgroundColor: 'grey',
      overflow: 'scroll'
    };
    return (
      <div>
        <div
          className="view"
          onClick={this.update}
          onScroll={this.update}
          onDoubleClick={this.update}
          onBlur={this.update}
          onFocus={this.update}
          onDrag={this.update}
          onTouchStart={this.update}
          onTouchEnd={this.update}
          onTouchMove={this.update}
          onTouchCancel={this.update}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero natus
          fugiat, neque aliquid reiciendis eveniet distinctio quaerat ea, itaque
          optio nulla sint consequuntur vitae minus doloremque nemo! Impedit
          ipsam eveniet omnis magni nihil dolorum repellat dolor molestias id
          assumenda veritatis aliquam, debitis provident in qui minima magnam
          dignissimos nesciunt aspernatur delectus repellendus est perferendis?
          Quam, tempore! Maiores ipsa iure nulla optio provident laborum
          possimus debitis dolorum quasi eum eaque, rem ratione nobis aspernatur
          eveniet obcaecati ipsam quam aperiam consequatur! Dignissimos minima
          vero facilis laborum! Ad eligendi, id blanditiis illo ratione deleniti
          dicta corrupti eaque porro sint sit alias, autem quasi, animi aperiam
          quod accusamus molestiae explicabo quae dolore veritatis cupiditate.
          Velit nobis ullam aut placeat culpa nisi non voluptate nemo in rerum.
          Aliquid doloremque aut natus, nesciunt unde dolores magnam non porro
          inventore nobis numquam voluptates et iste sint id rem amet vitae
          repellat enim sunt recusandae quibusdam consequatur explicabo dolorem?
          Culpa nulla sunt dicta doloremque adipisci, accusantium porro quos
          debitis assumenda aliquid ex voluptates magni, sit impedit nihil
          veniam labore officia repellendus dignissimos excepturi consectetur
          inventore quae dolorum? Asperiores consequuntur delectus cumque magni
          adipisci omnis quo. Quos alias nesciunt maiores assumenda aspernatur
          vitae illum saepe voluptatum, reprehenderit deleniti placeat quae quo
          culpa eius quasi ea sed laudantium dicta porro? Nostrum, odit ad hic
          molestiae molestias cumque eum, obcaecati a numquam, dolore quae
          quisquam maxime earum. In, illum eveniet reprehenderit labore mollitia
          exercitationem? Maiores labore dolorum exercitationem praesentium!
          Nihil maxime omnis consequatur voluptatum? Fugiat dolores facere a
          optio est quisquam quaerat asperiores qui odit facilis atque
          architecto, dolorum ex! Accusamus nesciunt natus porro assumenda,
          alias dignissimos numquam modi consequuntur pariatur sunt eveniet,
          amet dicta rerum doloribus distinctio rem nobis at commodi quod.
          Voluptates ratione eum, neque, iusto magni officia esse distinctio
          veritatis ea mollitia nostrum consequuntur molestiae ad eligendi
          eveniet alias unde debitis vero aut sequi. Expedita explicabo optio
          ad. Fugiat quisquam sapiente temporibus dicta facilis similique sunt
          quibusdam. Sed numquam laudantium similique nobis laboriosam quam
          atque, ad odit perferendis officia, possimus incidunt ducimus,
          voluptatem expedita quibusdam nihil nulla ratione dolor eius nam! Eius
          sed sapiente laboriosam excepturi aperiam magni obcaecati nobis natus,
          tenetur quasi itaque dolor architecto. Aspernatur vel culpa natus
          iste, consequuntur animi, aliquam nisi, quos aliquid voluptas
          blanditiis nostrum soluta possimus nesciunt voluptatum unde magni
          earum autem. Explicabo optio rerum excepturi nihil fugiat, laborum
          provident officia aliquam sunt nam quibusdam beatae distinctio est
          facilis. Voluptates labore quis eaque tempore voluptas exercitationem
          aut incidunt doloremque eius totam odio quo voluptate neque dolor
          saepe magnam optio, nihil nisi ab nostrum molestiae, consequatur
          aliquid! Nam asperiores minima voluptatem autem corporis sequi.
          Officiis enim molestiae autem accusamus, veniam voluptatum ab quos,
          consequuntur quo consectetur odit ipsa, fugit non magni et rerum aut
          minima sint. Enim, ducimus ipsam. Pariatur debitis ullam eveniet velit
          dolor eum, dicta quae labore dolore, incidunt voluptatum, recusandae
          quibusdam dolorum. Magnam molestias dolores nulla nostrum? Iure
          tempora quod nisi, officiis unde veritatis earum voluptas tempore
          placeat enim fuga. Quidem voluptatum odio cumque tenetur, quisquam
          natus blanditiis qui fuga.
        </div>
        <div>{this.state.type}</div>
      </div>
    );
  }
}

export default Home;
