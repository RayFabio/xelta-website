import { Metadata } from 'next';
import { COMPANY_NAME, COMPANY_DESCRIPTION } from './constants';

const baseUrl = 'https://xelta.com'; // Update this when domain is set

export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  image?: string
): Metadata {
  const fullTitle = `${title} | ${COMPANY_NAME}`;
  const url = `${baseUrl}${path}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultMetadata: Metadata = {
  title: `${COMPANY_NAME} | Education & Construction Excellence`,
  description: COMPANY_DESCRIPTION,
  keywords: [
    'education',
    'training',
    'civil construction',
    'infrastructure',
    'HR development',
    'professional training',
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  formatDetection: {
    email: false,
    telephone: false,
  },
};
