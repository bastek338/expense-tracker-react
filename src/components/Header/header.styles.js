import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBarContainer: {
        padding: theme.spacing(1, 0),
    },
    logoContainer: {
        display: 'flex',
        flexBasis: '5%', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(0, 1)
    },
    logoSize: {
        width: '50px',
        height: '50px',
        cursor: 'pointer'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        fontSize: '1.2rem',
        fontWeight: '500'
      },
    search: {
        position: 'relative',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        width: 'auto',
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: "#fafafa"
        },
        marginLeft: 0
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(2, 2, 2, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
              width: '26ch',
            },
          },
      },
      searchContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: '65%',
        padding: theme.spacing(0, 2),
        [theme.breakpoints.up('sm')]: {
            flexBasis: '35%'
        }
      },
      navigationContainerDesktop: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
          display: 'flex',
          flexBasis: '60%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: theme.spacing(0, 4),
          fontSize: '20px',
          fontWeight: '600',
          '& a': {
              padding: theme.spacing(0, 8)
            },
          '& > *': {
            margin: '0 0.5rem'
          },
          }
      },
      navigationContainerMobile: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
      }, 
      HeaderButtons: {
        background: '#f87e41',
        color: '#fff',
        boxShadow: 'none', 
        width: '40px',
        height: '40px',
        '&:hover': {
          background: '#e0623c',
          boxShadow: 'none'
        }

      },
      HeaderLink: {
        textDecoration: 'none',
        color: '#000',
        '&:hover': {
          color: '#E0623C'
        }
      },
      ActiveHeaderLink: {
        color: '#E0623C'
      },
      HeaderAvatarSize: {
        width: '40px',
        height: '40px'
      },
      HeaderAvatarName: {
        fontSize: '0.9rem',
        fontWeight: 'normal'
      }
}))

export default headerStyles;