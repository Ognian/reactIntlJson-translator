# reactIntlJson-translator

#NOT READY YET !!!!

## Workflow

1. Use `<FormattedMessage id="newItem" defaultMessage="Add item" />` for adding text in your react components.
2. Use the babel plugin `babel-plugin-react-intl` to extract them from your source code.
3. Use `react-intl-webpack-plugin` to combine them into one message file called `reactIntlMessages.json` and put this file into the webpack output path.
4. Use `reactIntlJson-translator` to translate this file into the translated file. Like professional CAT Tools, we use the concept called Translation Memory (TM) . This is a separate file where all translations are stored and with this file all translations can be reapplied to a newly generated `reactIntlMessages.json` file.
5. Use `reactIntlJson-loader` to load the translated files and convert them to messages.

## Installation

`npm install reactIntlJson-translator --save-dev`

... to be continued

## License

MIT (http://www.opensource.org/licenses/mit-license.php)