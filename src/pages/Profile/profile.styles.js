const { makeStyles } = require("@material-ui/core");

const profileStyles = makeStyles(theme => ({
    ProfileToolbar: theme.mixins.toolbar
}))

export default profileStyles