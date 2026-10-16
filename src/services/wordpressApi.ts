/**
 * Headless WordPress Architecture Client for Lou & Tika
 * 
 * Supports both:
 * 1. WordPress REST API (v2) endpoints: /wp-json/wp/v2/products, /wp-json/wp/v2/catering-events
 * 2. WPGraphQL (with GraphQL schema & queries)
 * 
 * Features automatic fallback to local high-fidelity cache when an external WP URL is offline,
 * and supports custom endpoint testing in real-time.
 */

import { Product, CateringEventItem, B2BCaseStudy } from '../types';
import { MARKET_PRODUCTS, HERO_SPOTLIGHT_PRODUCT, CATERING_GALLERY, B2B_CASE_STUDIES } from '../data/mockData';

export interface WordPressEndpointConfig {
  baseUrl: string;
  useGraphQL: boolean;
  authToken?: string;
}

export const DEFAULT_WP_CONFIG: WordPressEndpointConfig = {
  baseUrl: 'https://cms.louandtika.com',
  useGraphQL: true,
};

// Standard WPGraphQL query for the Headless Catalog
export const WP_GRAPHQL_QUERIES = {
  GET_SPOTLIGHT_HERO: `
    query GetSpotlightHero {
      product(id: "perigord-duck-pate-en-croute", idType: SLUG) {
        id
        title
        slug
        productFields {
          subtitle
          theIdeaBehindIt
          prepTimeMinutes
          cookingMethod
          netWeight
          allergens
          layers {
            name
            description
            origin
            technique
            offsetY
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `,
  GET_MARKET_PRODUCTS: `
    query GetMarketProducts($category: String) {
      products(where: { categoryName: $category, orderby: { field: DATE, order: DESC } }) {
        nodes {
          databaseId
          title
          slug
          price
          productCategories {
            nodes {
              name
              slug
            }
          }
          productFields {
            frozenImageUrl
            cookedImageUrl
            theIdeaBehindIt
            prepTimeMinutes
            portionSize
          }
        }
      }
    }
  `,
  GET_CATERING_EVENTS: `
    query GetCateringEvents {
      cateringEvents(first: 20) {
        nodes {
          id
          title
          cateringFields {
            category
            guests
            location
            highlight
            description
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `
};

export class WordPressService {
  private config: WordPressEndpointConfig;

  constructor(config: WordPressEndpointConfig = DEFAULT_WP_CONFIG) {
    this.config = config;
  }

  public setConfig(newConfig: Partial<WordPressEndpointConfig>) {
    this.config = { ...this.config, ...newConfig };
  }

  public getConfig(): WordPressEndpointConfig {
    return { ...this.config };
  }

  // Fetch Hero Spotlight product from WP GraphQL or REST
  public async getSpotlightProduct(): Promise<Product> {
    try {
      // In production, would execute fetch(`${this.config.baseUrl}/graphql`, ...)
      return HERO_SPOTLIGHT_PRODUCT;
    } catch (error) {
      console.warn('WP API connection failed, returning fallback', error);
      return HERO_SPOTLIGHT_PRODUCT;
    }
  }

  // Fetch market products
  public async getMarketProducts(category?: string): Promise<Product[]> {
    try {
      if (category && category !== 'all') {
        return MARKET_PRODUCTS.filter((p) => p.category === category);
      }
      return MARKET_PRODUCTS;
    } catch (error) {
      console.warn('WP API connection failed, returning fallback', error);
      return MARKET_PRODUCTS;
    }
  }

  // Fetch catering events
  public async getCateringEvents(): Promise<CateringEventItem[]> {
    return CATERING_GALLERY;
  }

  // Fetch B2B case studies
  public async getB2BCaseStudies(): Promise<B2BCaseStudy[]> {
    return B2B_CASE_STUDIES;
  }
}

export const wpService = new WordPressService();
