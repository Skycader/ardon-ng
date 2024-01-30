import { Component } from '@angular/core';
import { CardConfigInterface } from '../../../ardon-common/models/cardConfig.interface';

@Component({
  selector: 'ardon-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.scss',
})
export class ProfileLayoutComponent {
  public components: CardConfigInterface[] = [
    {
      head: 'Areisan Skycader',
      subhead: 'Admin',
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      description: `Edit your profile information here`,
      background:
        'https://img.freepik.com/premium-photo/funny-purebred-hipster-pet-with-glasses-hood-stylish-cool-dog-looking-away-animal-portrait-generative-ai_305419-2887.jpg',
      buttons: [
        {
          icon: 'edit',
          text: 'Edit',
        },
        {
          icon: 'exit_to_app',
          text: 'Exit',
        },
      ],
    },

    {
      head: 'Blogging',
      subhead: 'Post something',
      avatar:
        'https://ilovemy.pet/cdn/shop/products/the-poet-retriever-poem-for-dog-lovers_grande.webp?v=1678081625',
      description: `Blog the world`,
      background:
        'https://img.freepik.com/premium-photo/serious-dog-writer-dog-journalist-dog-secretary-dog-with-book-feather_556412-5717.jpg',
      buttons: [
        {
          icon: 'note_add',
          text: 'Add post',
        },
        {
          icon: 'edit',
          text: 'Edit posts',
        },
      ],
    },
    {
      head: 'Users',
      subhead: 'Table of users',
      avatar:
        'https://img.freepik.com/premium-photo/purebred-cool-little-poodles-with-curls-hairstyles-dark-background_124507-32575.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais',
      description: `See your people`,
      background:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81pU32sgusL._AC_UF894,1000_QL80_.jpg',
      buttons: [
        {
          icon: 'table_chart',
          text: 'Open table',
        },
      ],
    },
    {
      head: 'Topics',
      subhead: 'Categorize your posts',
      avatar:
        'https://m.media-amazon.com/images/I/81aDhGOSaFL._AC_UF894,1000_QL80_.jpg',
      description: `Topics of your blog`,
      background:
        'https://img.freepik.com/premium-vector/dog-wearing-glasses-tshirt-design-animal-nature-concept-isolated_884500-21073.jpg',
      buttons: [
        {
          icon: 'edit',
          text: 'Edit',
        },
      ],
    },
    {
      head: 'Gallery',
      subhead: 'Photoes, videos, files',
      avatar:
        'https://static.vecteezy.com/system/resources/previews/023/184/670/large_2x/portrait-of-a-cute-corgi-dog-in-an-astronaut-suit-ai-generative-image-free-photo.jpg',
      description: `Gallery of your photoes`,
      background:
        'https://i.etsystatic.com/39933715/r/il/e48ab6/4525689053/il_570xN.4525689053_d7cb.jpg',
      buttons: [
        {
          icon: 'cloud_upload',
          text: 'Upload',
        },
        {
          icon: 'folder',
          text: 'Open gallery',
        },
      ],
    },
  ];
}
