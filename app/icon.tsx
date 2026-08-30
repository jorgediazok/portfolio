import { ImageResponse } from 'next/og';

export const size = { width: 128, height: 128 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d9488',
          borderRadius: 28,
          color: 'white',
          fontSize: 56,
          fontWeight: 700,
          fontFamily: 'ui-monospace, Menlo, monospace',
        }}
      >
        {'</>'}
      </div>
    ),
    size
  );
}
