<script>

export default {
    name: 'test',
    data() {
        return {
            // datalist: [
            //     'a', 'b', 'c'
            // ],
            // bar: 'HELLo'
            hrData: {
                name: 'db',
                children: [{
                    name: 'a1',
                    children: [{
                        name: 'ab1'
                    },{
                        name: 'ab2'
                    }]
                }, {
                    name: 'c2',
                    children: [{
                        name: 'cd1'
                    },{
                        name: 'cd2'
                    }]
                }]
            }
        }
    },
    render(h) {
        // return <ul>{this.bar}acs{this.items.map(item => `<li>${item.name}</li>`)}</ul>
        var dirprop = {
            data: { class: 'orgchart',
                options: {}
            }
        }
        return <div {...dirprop}><renderLoop data={hrData}/></div>
    },
    
    props: {
        items: {
            type: Array,
            default() {
                return [{
                    name: 'test1'
                }, {
                    name: 'test2'
                }]
            }
        }
    }
}
</script>
