import '@repo/ui/global';

export default {
  title: 'Design System',
  parameters: {
    docs: {
      description: {
        component:
          'An overview of the global styles including colors and typography.'
      }
    }
  }
};

export const Colors = () => (
  <div>
    <h1>Colors</h1>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <ColorBlock name="Primary Color" varName="--primary-color" />
      <ColorBlock name="Secondary Color" varName="--secondary-color" />
      <ColorBlock name="Danger Color" varName="--danger-color" />
      <ColorBlock name="Background Color" varName="--background-color" />
      <ColorBlock name="Text Color" varName="--text-color" />
      <ColorBlock name="Heading Color" varName="--heading-color" />
    </div>
  </div>
);

export const Typography = () => (
  <div>
    <h1>Typography</h1>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>This is a paragraph demonstrating the base font size and styling.</p>
    <small>This is small text using the small-text size variable.</small>
  </div>
);

const ColorBlock = ({ name, varName }: { name: string; varName: string }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <div
      style={{
        backgroundColor: `var(${varName})`,
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        border: '1px solid var(--border-color)'
      }}
    ></div>
    <p>{name}</p>
    <small>{varName}</small>
  </div>
);
