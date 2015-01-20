# log
Print the info in an element.

## Usage

For details, you can see the `example` directory.

```js
var log = new Log();

log.send('hello world');
log.s('hello world');

log.s(0)
  .s(false)
  .s('')
  .s(undefined)
  .s(null)
  .s(NaN);

var obj = {
  name: 'Alex Chao',
  address: {
    Country: 'China',
    province: 'Guangdong'
  }
};
log.s(JSON.stringify(obj));
```

## Options

Default options:

```js
{
  id: '',
  className: '',
  maxCount: 0,
  enableStyled: true,
  containerStyle: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    width: '300px',
    height: '200px',
    backgroundColor: '#fff',
    border: '1px solid #aaa',
    overflow: 'auto'
  },
  itemStyle: {
    margin: '0',
    padding: '0 4px',
    minHeight: '16px',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#333',
    borderBottom: '1px solid #e8e8e8'
  }
}
```

## License

Under the MIT license.
