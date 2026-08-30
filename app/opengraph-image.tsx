import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0c0a09',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 84,
            height: 84,
            borderRadius: 18,
            background: '#0f172a',
            color: '#2dd4bf',
            fontSize: 34,
            fontWeight: 700,
            fontFamily: 'ui-monospace, Menlo, monospace',
            marginBottom: 36,
          }}
        >
          {'</>'}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 62,
            fontFamily: 'ui-monospace, Menlo, monospace',
            fontWeight: 700,
            color: 'white',
          }}
        >
          Jorge Díaz
        </div>
        <div
          style={{
            display: 'flex',
            width: 140,
            height: 3,
            background: '#0d9488',
            borderRadius: 2,
            marginTop: 22,
            marginBottom: 22,
          }}
        />
        <div style={{ display: 'flex', fontSize: 28, color: '#a8a29e' }}>
          Senior Frontend Developer
        </div>
      </div>
    ),
    size
  );
}
