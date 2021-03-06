/**
 * @file Defines the chained template for the 404 page
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data ={
  locale: 'en',
  title: 'π Congratulations! You found the sample 404 page!',
  layout: 'layouts/page',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
}

/**
 * The content of the 404 page template
 * @method
 * @name render()
 * @param {Object} data 11tyβs data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/quicktips/not-found/ 404 pages in 11ty}
 */
export function render(data) {
  return `Unless you were looking for this page on purpose, well β¦ the other resource you were actually looking for probably canβt be found at the address you requested.

π Edit this template to help your visitors find their way back to more meaningful content.

### Other options

* [π Complain to ${data.author.name.givenName} on Twitter](${data.author.social.accounts.find(
  account => account.name === 'Twitter').url})
* [π₯ File an issue in Git](${data.pkg.bugs.url})
* [π‘ Return to the homepage](${data.pkg.bugs.url})`
}
