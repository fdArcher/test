<script>
export default {
    name: 'renderLoop',
    props: ['data'],
    render(h) {
        var children = this.data.childern
        var hasChildren = children ? children.length : false
        if (hasChildren) {
            var $nodesCell
            // var $upper = <tr class="lines"><td colspan="rightLine"></td>{children.map(() => { return <td class="leftLine topLine"></td><td class="rightLine topLine"></td> })}<td class="leftLine"></td></tr>
            // $nodeCell = <tr class="nodes"></tr>{children.length*2}><div class="downLine"></div></td></tr>
            // var $lower = <tr class="lines"><td class=
            return <table><tr class="lines"><td colspan={children.length*2}><div class="downLine"></div></td></tr>
            <tr class="lines"><td class="rightLine"></td>{children.map(() => { return <td class="leftLine topLine"></td> })}<td class="leftLine"></td></tr>
            <tr class="nodes">{children.map(child => {
                return <td colspan="2"><renderLoop data={child}/></td>
            })}</tr></table>
        } else {
            return <tr></tr>
        }
    }
}
</script>
