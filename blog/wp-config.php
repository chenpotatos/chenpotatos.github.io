<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'b7_31477644_wordpress' );

/** Database username */
define( 'DB_USER', 'b7_31477644' );

/** Database password */
define( 'DB_PASSWORD', 'Zhaoxiang109' );

/** Database hostname */
define( 'DB_HOST', 'sql102.byethost7.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-}?m[9JIf.^8V$e!![d@!ndzuN;BKB97JF[l^5FG/Gdk!oyU+4~4FlNdMzw^F<j:' );
define( 'SECURE_AUTH_KEY',  'v~CnCR9u/-^b_[YZg|ZT[-r9;E),6Er6{{aD)CNBQ>stzgSgPxYQ_5k>J[;q59q_' );
define( 'LOGGED_IN_KEY',    'J${wOlW#b:vu<lJ<mE!B/k5,LJt@%TcL7zY[Fp^fOq47~ubENc=Bat%xP(]~c;ET' );
define( 'NONCE_KEY',        'HwKgf#o91p}mg9V:L`oe*eHTE>G^#)JJ<MXcSU2~hX|Bz-yga7;K#[6k!ukw.@#F' );
define( 'AUTH_SALT',        '>*9tZ*(pSw+f,NUOf|Wmp9dFVxq!;Eid(r)yk~$8G@>ZsO=_p>7MZKj*tM69w{v*' );
define( 'SECURE_AUTH_SALT', '05+1up#[2L!J#X<</+NKWByaWP)j/V4G]@*WDHyXgU:rh&S>~fcO,^sXT)TS|:s*' );
define( 'LOGGED_IN_SALT',   'IK*2[**<6`I5Rr a?LJo vS7Z9gr(~g]KD~p{Y Y9rX_Jt{kjg?D*~uk/8q&dV?k' );
define( 'NONCE_SALT',       'Ub^k9aTwcLtGrEc1BxsE=k6QxOui>PaGgBOs@sq Nq/F54e|(G+jJ{a`igHQ6^Yq' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'b7_31477644_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
