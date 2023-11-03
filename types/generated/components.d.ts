import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCopy extends Schema.Component {
  collectionName: 'components_blocks_copies';
  info: {
    displayName: 'Copy';
    icon: 'write';
  };
  attributes: {
    copy: Attribute.RichText;
  };
}

export interface BlocksHeroImage extends Schema.Component {
  collectionName: 'components_blocks_hero_images';
  info: {
    displayName: 'Hero Image';
    icon: 'picture';
  };
  attributes: {
    copilot_image: Attribute.String &
      Attribute.CustomField<'plugin::cn-image-preview.image-preview'>;
    alt_text: Attribute.String;
    file_name: Attribute.String;
  };
}

export interface BlocksProductGrid extends Schema.Component {
  collectionName: 'components_blocks_product_grids';
  info: {
    displayName: 'Product Grid';
    icon: 'apps';
  };
  attributes: {
    preview_products: Attribute.Relation<
      'blocks.product-grid',
      'oneToMany',
      'api::preview-product.preview-product'
    >;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quote: Attribute.Text;
  };
}

export interface BlocksSwiper extends Schema.Component {
  collectionName: 'components_blocks_swipers';
  info: {
    displayName: 'Swiper';
    icon: 'exit';
  };
  attributes: {
    preview_products: Attribute.Relation<
      'blocks.swiper',
      'oneToMany',
      'api::preview-product.preview-product'
    >;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    icon: 'expand';
  };
  attributes: {
    brand: Attribute.String;
    title: Attribute.String;
    dek: Attribute.String;
    author: Attribute.String;
  };
}

export interface HeroHeroSingle extends Schema.Component {
  collectionName: 'components_hero_hero_singles';
  info: {
    displayName: 'heroSingle';
  };
  attributes: {
    mediaAlt: Attribute.Component<'media.media-alt', true>;
  };
}

export interface MediaMediaAlt extends Schema.Component {
  collectionName: 'components_media_media_alts';
  info: {
    displayName: 'mediaAlt';
    icon: 'fileError';
    description: '';
  };
  attributes: {
    mediaURL: Attribute.String;
    altText: Attribute.String;
    mediaType: Attribute.Enumeration<['video', 'image']>;
  };
}

export interface ProductProductInfo extends Schema.Component {
  collectionName: 'components_product_product_infos';
  info: {
    displayName: 'productInfo';
    icon: 'discuss';
  };
  attributes: {
    productName: Attribute.String;
    productDescription: Attribute.Text;
    productPrice: Attribute.Decimal;
    productUrl: Attribute.String;
    cta: Attribute.String;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'product';
    icon: 'picture';
  };
  attributes: {
    media: Attribute.Component<'media.media-alt'>;
    productInfo: Attribute.Component<'product.product-info'>;
  };
}

export interface QuoteQuote extends Schema.Component {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quote: Attribute.Text;
  };
}

export interface SliderSlider extends Schema.Component {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
    icon: 'exit';
  };
  attributes: {};
}

export interface SwiperSwiper extends Schema.Component {
  collectionName: 'components_swiper_swipers';
  info: {
    displayName: 'Swiper';
    icon: 'exit';
  };
  attributes: {
    preview_products: Attribute.Relation<
      'swiper.swiper',
      'oneToMany',
      'api::preview-product.preview-product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.copy': BlocksCopy;
      'blocks.hero-image': BlocksHeroImage;
      'blocks.product-grid': BlocksProductGrid;
      'blocks.quote': BlocksQuote;
      'blocks.swiper': BlocksSwiper;
      'header.header': HeaderHeader;
      'hero.hero-single': HeroHeroSingle;
      'media.media-alt': MediaMediaAlt;
      'product.product-info': ProductProductInfo;
      'product.product': ProductProduct;
      'quote.quote': QuoteQuote;
      'slider.slider': SliderSlider;
      'swiper.swiper': SwiperSwiper;
    }
  }
}
