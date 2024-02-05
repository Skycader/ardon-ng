import { Component } from '@angular/core';
import { CardConfigInterface } from '../../../ardon-common/models/cardConfig.interface';

@Component({
  selector: 'ardon-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.scss',
})
export class ProfileLayoutComponent {
  public user = {
    isSignedIn: false,
  };
  public components: CardConfigInterface[] = [
    {
      title: 'Areisan Skycader',
      subheader: 'Admin',
      avatarSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      description: `Edit your profile information here`,
      backgroundSrc:
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
      title: 'Blogging',
      subheader: 'Blog the world',
      avatarSrc:
        'https://ilovemy.pet/cdn/shop/products/the-poet-retriever-poem-for-dog-lovers_grande.webp?v=1678081625',
      description: `You currently have 10 posts`,
      backgroundSrc:
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
      title: 'Users',
      subheader: 'Table of users',
      avatarSrc:
        'https://img.freepik.com/premium-photo/purebred-cool-little-poodles-with-curls-hairstyles-dark-background_124507-32575.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais',
      description: `Your blog has 23 subscribers`,
      backgroundSrc:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81pU32sgusL._AC_UF894,1000_QL80_.jpg',
      buttons: [
        {
          icon: 'table_chart',
          text: 'Open table',
        },
      ],
    },
    {
      title: 'Topics',
      subheader: 'Topics of your blog',
      avatarSrc:
        'https://m.media-amazon.com/images/I/81aDhGOSaFL._AC_UF894,1000_QL80_.jpg',
      description: `Your blog has 5 topics`,
      backgroundSrc:
        'https://img.freepik.com/premium-vector/dog-wearing-glasses-tshirt-design-animal-nature-concept-isolated_884500-21073.jpg',
      buttons: [
        {
          icon: 'edit',
          text: 'Edit',
        },
      ],
    },
    {
      title: 'Gallery',
      subheader: 'Photoes, videos, files',
      avatarSrc:
        'https://static.vecteezy.com/system/resources/previews/023/184/670/large_2x/portrait-of-a-cute-corgi-dog-in-an-astronaut-suit-ai-generative-image-free-photo.jpg',
      description: `You have uploaded 12 files in total`,
      backgroundSrc:
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
