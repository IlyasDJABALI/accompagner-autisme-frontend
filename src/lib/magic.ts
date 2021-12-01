import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// Create client-side Magic instance
const createMagic = (apiKey: string) => {
    return (
      new Magic(apiKey, {
        extensions: [new OAuthExtension()],
      })
    );
};

export const magic = createMagic(String(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY));