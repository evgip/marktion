[中文](https://github.com/microvoid/marktion/blob/main/README-zh_CN.md)/English

# Introducing Marktion

![](https://github.com/microvoid/marktion/blob/main/public/recorder.gif)

Marktion is a WYSIWYG Markdown editor based on [tiptap](https://tiptap.dev/). It provides an intuitive way to edit and preview Markdown text, making it easier for users to create visually appealing documents.

See our website [marktion.io](https://marktion.io) in action.

## Features

- [NEW] ✨ AI Integration: Ready to use AI to assist in writing Markdown? Built-in AI Chat Panel UI, supports AI plugin extensions;
- [NEW] SSR: Supports server-side high-performance rendering."

- **WYSIWYG Editing**: Real-time preview of Markdown rendering for a more intuitive editing experience.
- **Slash Menu** & **Bubble Menu**: Access commonly used formatting options and commands using a slash command menu, inspired by Notion's editor.
- **Dark Mode Support**: Enable Dark Mode to provide a visually comfortable editing experience in low-light environments.

## Installation and Usage

1. Install dependencies.

```bash
npm intall marktion
```

2. Usage

```tsx
import { Marktion } from 'marktion';
import 'marktion/dist/style.css';

function Editor() {
  return <Marktion darkMode={isDarkMode} markdown={`# Hello World`} />;
}
```

3. Example

Have a look at the examples to see [marktion.io](https://marktion.io) in action.

## API

### MarktionProps

| **Property**  | **Description**                              | **Type**                                       | Default |
| ------------- | -------------------------------------------- | ---------------------------------------------- | ------- |
| markdown      | The initial Markdown content for the editor. | string                                         | -       |
| darkmode      | Enable or disable Dark Mode in the editor.   | boolean                                        | false   |
| onUploadImage | Callback function for uploading images.      | `(file: File, editor: Editor) => Promise<url>` | -       |

Consult [tiptap's documentation](https://tiptap.dev/installation/react) to find more APIs.

### MarktionRef

| **Property** | **Description**                                                              | **Type**       | Default |
| ------------ | ---------------------------------------------------------------------------- | -------------- | ------- |
| getMarkdown  | A callback function that returns the current Markdown content of the editor. | `() => string` | -       |
| editor       | tiptap editor instance, [read more](https://tiptap.dev/installation/react).  | Editor         | -       |

Example usage:

```tsx
import { MarktionRef, Marktion } from 'marktion';

function App() {
  const marktionRef = useRef<MarktionRef>(null);

  const onExport = () => {
    const content = marktionRef.current?.getMarkdown();
    console.log(content);
  };

  return (
    <>
      <button onClick={onExport}>export</button>
      <Marktion ref={marktionRef} />
    </>
  );
}
```

## Plugins

### AI Plugin

> The AI Plugin is based on Vercel AI. Before you start, you need to create an AI router. Please refer to the documentation for more information: [Getting Started](https://sdk.vercel.ai/docs/getting-started).

Example usage:

```tsx
AIPlugin({
  openai: {
    basePath: 'https://api.openai.com/v1',
    apiKey: 'KEY'
  }
});
```

## Contributing

Thank you for considering contributing to Marktion! If you would like to contribute, please follow these steps:

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine.

```bash
git clone https://github.com/yourusername/marktion.git
cd marktion
```

3. Install dependencies.

```bash
pnpm i
```

4. Make changes and test your modifications.

5. Commit your changes.

6. Create a pull request.

Go to the original repository and click on "New Pull Request". Fill in the necessary details and describe the changes you made.

We will review your pull request as soon as possible. Thank you for your contribution!

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/microvoid/marktion/blob/main/LICENSE) file for more details.

## Contact

If you have any questions, suggestions, or issues, feel free to reach out to us through the following channels:

- Email: whistleryz@gmail.com
- Issue Tracker: Project Issues (Please specify the issue type in the issue title)
