# grunt-svg-react-component

This task makes it easy to work with and include SVGs in your React components. It will run through a folder of SVGs and automatically create React components for you to import into your other React components. The original use case for this grunt task was converting SVG icons so I could do something like:

`import MyIcon from 'converted.jsx'`


## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg-react-component --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```shell
grunt.loadNpmTasks('grunt-svg-react-component');
```

## The task
_Run this task with the `grunt svg-react-component` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### ext
Type: `String`
Default: `.jsx`

The extension of the outputted React component.

#### clean
Type: `Boolean`
Default: `false`

Remove all files in the destination directory before converting the source svg files into it.

#### svgo
Type: `Boolean`
Default: `false`

Run your svg image through [SVGO](https://github.com/svg/svgo) before creating the React component.


### Usage examples

#### Basic compression

This configuration will convert your svgs using the default options.

```js
// Project configuration.
grunt.initConfig({
    'svg-react-component': {
        basic: {
            files: {
                'destination/path/for/components/': 'source/path/of/perhaps/some/icons/**/*.svg'
            }
        }
    }
});
```

#### Multiple targets

This configuration will clean the destination folder, run SVGO on the files in the aggressive target files while leaving the basic files to be converted to React components without any optimization via SVGO.

```js
// Project configuration.
grunt.initConfig({
    'svg-react-component': {
        aggressive: {
            options: {
                clean: true,
                svgo: true
            },
            files: {
                'destination/path/for/components/': [
                    'source/path/of/perhaps/some/icons/**/*.svg',
                    '!source/path/of/perhaps/some/icons/**/ignored.svg'
                ]
            }
        },

        basic: {
            files: {
                'destination/path/for/components/': [
                    'source/path/of/perhaps/some/special/icons/that_shouldnt.svg',
                    'source/path/of/perhaps/some/special/icons/be_optimized.svg'
                ]
            }
        }
    }
});
```

#### Including in your React files

If your React components are flavored with ES6, you might include your freshly converted icon like so:

```js

'use strict'

import React from 'react';
import ConvertedIcon from '../path/to/converted/svg/component.jsx';

class SomeComponent extends React.Component {
    render() {
        <button>
            <ConvertedIcon className="icon" />
            Click me
        </button>
    }
}

```
