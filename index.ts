const arr = [ 
    {
        col1 : "value11",
        col2 : "value12",
        col3 : "value13"
    },
    {
        col1 : "value21",
        col2 : "value22",
        col3 : "value23"
    },
    {
        col1 : "value31",
        col2 : "value32",
        col3 : "value33",
        col4 : "value34"
    }
]
 const ans = {};
for (let i=0; i<arr.length; i++) {
    Object.entries(arr[i]).map(entry => {
        let key = entry[0];
        let value = entry[1];
        if (key in ans) {
           ans[key].push(value);
        }else {
           // ans[key]=new Array();
            ans[key]=[value];
        }
    });
}
console.log(ans)