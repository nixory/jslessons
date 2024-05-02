let arr = [  '#000000', '#040720', '#0C090A', '#34282C', '#3B3131', '#3A3B3C',
    '#454545', '#4D4D4F', '#413839', '#3D3C3A', '#463E3F', '#4C4646',
    '#504A4B', '#565051', '#52595D', '#5C5858', '#625D5D', '#666362',
    '#696969', '#686A6C', '#6D6968', '#726E6D', '#736F6E', '#757575',
    '#797979', '#837E7C', '#808080', '#848482', '#888B90', '#8C8C8C',
    '#8D918D', '#9B9A96', '#99A3A3', '#A9A9A9', '#A8A9AD', '#B6B6B4',
    '#B6B6B6', '#C0C0C0', '#C9C1C1', '#C9C0BB', '#C0C6C7', '#D1D0CE',
    '#CECECE', '#D3D3D3', '#DADBDD', '#DCDCDC', '#E0E5E5', '#F5F5F5',
    '#EEEEEE', '#E5E4E2', '#BCC6CC', '#98AFC7', '#838996', '#778899',
    '#708090', '#6D7B8D', '#657383', '#616D7E', '#646D7E', '#71797E',
    '#566D7E', '#737CA1', '#728FCE', '#4863A0', '#2F539B', '#2B547E',
    '#36454F', '#29465B', '#2B3856', '#123456', '#151B54', '#191970',
    '#000080', '#151B8D', '#00008B', '#15317E', '#0000A0', '#0000A5',
    '#0020C2', '#0000CD', '#0041C2', '#2916F5', '#0000FF', '#0002FF',
    '#0909FF', '#1F45FC', '#2554C7', '#1569C7', '#1974D2', '#2B60DE',
    '#4169E1', '#2B65EC', '#0059FF', '#306EFF', '#157DEC', '#1589FF',
    '#1E90FF', '#368BC1', '#4682B4', '#488AC7',
]

document.querySelector("button").onclick = () => {
    document.querySelector("body").style.backgroundColor = arr[Math.floor(Math.random(arr.length - 1) * arr.length)]
    document.querySelector('.actualcolor').innerHTML = `Actual color is ${arr[Math.floor(Math.random(arr.length - 1) * arr.length)]}`
}
