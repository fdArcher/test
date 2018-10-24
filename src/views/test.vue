<script>
export default {
    name: 'test',
    data() {
        return {
            datalist: [
                'a', 'b', 'c'
            ],
            bar: 'HELLo'
        }
    },
    render: function(h) {
        return <ul>{this.bar}acs{this.items.map(item => `<li>${item.name}</li>`)}</ul>
    },
    
    props: {
        items: {
        type: Array,
        default: function() {
            return [
            {
                name: 'test1'
            },
            {
                name: 'test2'
            }
            ]
        }
        }
    }
}
</script>
