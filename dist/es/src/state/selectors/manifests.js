function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { createSelector } from 'reselect';
import { createCachedSelector } from 're-reselect';
import { PropertyValue, Utils, Resource } from 'manifesto.js';
import getThumbnail from '../../lib/ThumbnailFactory';
import asArray from '../../lib/asArray';
import { getCompanionWindow } from './companionWindows';
import { getManifest } from './getters';
import { getConfig } from './config';

/** */
function createManifestoInstance(json, locale) {
  if (!json) return undefined;
  var manifestoObject = Utils.parseManifest(json, locale ? {
    locale: locale
  } : undefined);
  // Local patching of Manifesto so that when its a Collection, it behaves similarly
  if (typeof manifestoObject.getSequences != 'function') {
    manifestoObject.getSequences = function () {
      return [];
    };
  }
  return manifestoObject;
}

/** */
var getLocale = createSelector([getCompanionWindow, getConfig], function () {
  var companionWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return companionWindow.locale || config.language;
});

/**
 * Convenience selector to get a manifest (or placeholder).
 * @param {object} state
 * @param {object} props
 * @param {string} props.windowId
 * @returns {object} {error: null: id: string, isFetching: boolean, json: {...}}
 */
export var getManifestStatus = createSelector([getManifest], function (manifest) {
  return manifest || {
    missing: true
  };
});

/**
 * Convenience selector to get a manifest loading error
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @returns {string|null}
 */
export var getManifestError = createSelector([getManifest], function (manifest) {
  return manifest && manifest.error;
});

/** Instantiate a manifesto instance */
var getContextualManifestoInstance = createCachedSelector(getManifest, getLocale, function (manifest, locale) {
  return manifest && createManifestoInstance(manifest.json, locale);
})(function (state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    manifestId = _ref.manifestId,
    windowId = _ref.windowId;
  return [manifestId, windowId, getLocale(state, {
    companionWindowId: companionWindowId
  })].join(' - ');
} // Cache key consisting of manifestId, windowId, and locale
);

/**
 * Instantiate a manifesto instance
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @returns {object}
 */
export var getManifestoInstance = createSelector(getContextualManifestoInstance, function (state, _ref2) {
  var json = _ref2.json;
  return json;
}, getLocale, function (manifesto, manifestJson, locale) {
  return manifestJson && createManifestoInstance(manifestJson, locale) || manifesto;
});
export var getManifestLocale = createSelector([getManifestoInstance], function (manifest) {
  return manifest && manifest.options && manifest.options.locale && manifest.options.locale.replace(/-.*$/, '');
});

/** */
function getProperty(property) {
  return createSelector([getManifestoInstance], function (manifest) {
    return manifest && manifest.getProperty(property);
  });
}

/**
 * Returns the manifest provider.
 * @param {object} state
 * @param {object} props
 * @param {string} props.companionWindowId
 * @returns {string}
 */
export var getManifestProvider = createSelector([getProperty('provider')], function (provider) {
  return provider;
});

/**
 * Return the IIIF v3 provider of a manifest or null.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getManifestProviderName = createSelector([getProperty('provider'), getManifestLocale], function (provider, locale) {
  return provider && provider[0].label && PropertyValue.parse(provider[0].label, locale).getValue();
});

/**
 * Return the IIIF v3 provider logo.
 * @param {object} state
 * @param {object} props
 * @returns {string|null}
 */
export var getProviderLogo = createSelector([getManifestProvider], function (provider) {
  var _getThumbnail;
  var logo = provider && provider[0] && provider[0].logo && provider[0].logo[0];
  if (!logo) return null;
  return (_getThumbnail = getThumbnail(new Resource(logo))) === null || _getThumbnail === void 0 ? void 0 : _getThumbnail.url;
});

/**
 * Get the logo for a manifest.
 * @param {object} state
 * @param {object} props
 * @returns {string|null}
 */
export var getManifestLogo = createSelector([getManifestoInstance, getProviderLogo], function (manifest, v3logo) {
  return v3logo || manifest && manifest.getLogo();
});

/**
 * Return the IIIF v3 homepage of a manifest or null.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getManifestHomepage = createSelector([getProperty('homepage'), getManifestLocale], function (homepages, locale) {
  return homepages && asArray(homepages).map(function (homepage) {
    return {
      label: PropertyValue.parse(homepage.label, locale).getValue(),
      value: homepage.id || homepage['@id']
    };
  });
});

/**
 * Return the IIIF v3 renderings of a manifest or null.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getManifestRenderings = createSelector([getManifestoInstance], function (manifest) {
  return manifest && manifest.getRenderings().map(function (rendering) {
    return {
      label: rendering.getLabel().getValue(),
      value: rendering.id
    };
  });
});

/**
 * Return the IIIF v2/v3 seeAlso data from a manifest or null.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getManifestSeeAlso = createSelector([getProperty('seeAlso'), getManifestLocale], function (seeAlso, locale) {
  return seeAlso && asArray(seeAlso).map(function (related) {
    return {
      format: related.format,
      label: PropertyValue.parse(related.label, locale).getValue(),
      value: related.id || related['@id']
    };
  });
});

/**
 * Return the IIIF v2/v3 seeAlso data from a manifest or null.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 * @deprecated This does not actually return the content of "related" and
 * might be removed in a future version.
 * @see getManifestSeeAlso
 */
export var getManifestRelatedContent = getManifestSeeAlso;

/**
 * Return the IIIF v2 realated links manifest or null
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getManifestRelated = createSelector([getProperty('related'), getManifestLocale], function (relatedLinks, locale) {
  return relatedLinks && asArray(relatedLinks).map(function (related) {
    return typeof related === 'string' ? {
      value: related
    } : {
      format: related.format,
      label: PropertyValue.parse(related.label, locale).getValue(),
      value: related.id || related['@id']
    };
  });
});

/**
 * Return the IIIF requiredStatement (v3) or attribution (v2) data from a manifest or null
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getRequiredStatement = createSelector([getManifestoInstance], function (manifest) {
  return manifest && asArray(manifest.getRequiredStatement()).filter(function (l) {
    return l.getValues().some(function (v) {
      return v;
    });
  }).map(function (labelValuePair) {
    return {
      label: labelValuePair.label && labelValuePair.label.getValue() || null,
      values: labelValuePair.getValues()
    };
  });
});

/**
 * Return the IIIF v2 rights (v3) or license (v2) data from a manifest or null
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
*/
export var getRights = createSelector([getProperty('rights'), getProperty('license'), getManifestLocale], function (rights, license, locale) {
  var data = rights || license;
  return asArray(PropertyValue.parse(data, locale).getValues());
});

/**
 * Return the supplied thumbnail for a manifest or null.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export function getManifestThumbnail(state, props) {
  var manifest = getManifestoInstance(state, props);
  var _getConfig = getConfig(state),
    _getConfig$thumbnails = _getConfig.thumbnails,
    thumbnails = _getConfig$thumbnails === void 0 ? {} : _getConfig$thumbnails;
  if (!manifest) return undefined;
  var thumbnail = getThumbnail(manifest, {
    maxHeight: 80,
    maxWidth: 120,
    preferredFormats: thumbnails.preferredFormats
  });
  return thumbnail && thumbnail.url;
}

/**
 * Return manifest title.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string}
 */
export var getManifestTitle = createSelector([getManifestoInstance], function (manifest) {
  return manifest && manifest.getLabel().getValue();
});

/**
 * Return manifest description (IIIF v2) -- distinct from any description field nested under metadata.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string|null}
 */
export var getManifestDescription = createSelector([getLocale, getManifestoInstance], function (locale, manifest) {
  return manifest && manifest.getDescription().getValue(locale);
});

/**
* Return manifest summary (IIIF v3).
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {string|null}
*/
export var getManifestSummary = createSelector([getProperty('summary'), getManifestLocale], function (summary, locale) {
  return summary && PropertyValue.parse(summary, locale).getValue(locale);
});

/**
 * Return manifest title.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {string}
 */
export var getManifestUrl = createSelector([getManifestoInstance], function (manifest) {
  return manifest && manifest.id;
});

/**
 * Return metadata in a label / value structure
 * This is a potential seam for pulling the i18n locale from
 * state and plucking out the appropriate language.
 * For now we're just getting the first.
 * @param {object} Manifesto IIIF Resource (e.g. canvas, manifest)
 * @param iiifResource
 * @returns {Array[Object]}
 */
export function getDestructuredMetadata(iiifResource) {
  return iiifResource && iiifResource.getMetadata().map(function (labelValuePair) {
    return {
      label: labelValuePair.getLabel(),
      values: labelValuePair.getValues()
    };
  });
}

/**
 * Return manifest metadata in a label / value structure
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @returns {Array[Object]}
 */
export var getManifestMetadata = createSelector([getManifestoInstance], function (manifest) {
  return manifest && getDestructuredMetadata(manifest);
});

/** */
function getLocalesForStructure(item) {
  var languages = [];
  if (Array.isArray(item)) {
    languages.push.apply(languages, _toConsumableArray(item.filter(function (i) {
      return typeof i === 'object' && i['@language'];
    }).map(function (i) {
      return i['@language'];
    })));
  } else if (item && typeof item === 'object') {
    if (item['@language']) languages.push(item['@language']);
  }
  return languages;
}

/** */
function getLocales(resource) {
  if (!resource) return [];
  var metadata = resource.getProperty('metadata') || [];
  var languages = {};
  for (var i = 0; i < metadata.length; i += 1) {
    var item = metadata[i];
    getLocalesForStructure(item.label).forEach(function (l) {
      languages[l] = true;
    });
    getLocalesForStructure(item.value).forEach(function (l) {
      languages[l] = true;
    });
  }
  return Object.keys(languages);
}
export var getMetadataLocales = createSelector([getManifestoInstance], function (manifest) {
  return getLocales(manifest);
});

/**
 * Returns manifest search service.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @returns {string|null}
 */
export var getManifestSearchService = createSelector([getManifestoInstance], function (manifest) {
  if (!manifest) return null;
  var searchService = manifest.getService('http://iiif.io/api/search/0/search') || manifest.getService('http://iiif.io/api/search/1/search');
  if (searchService) return searchService;
  return null;
});

/**
 * Returns manifest autocomplete service.
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @returns {string|null}
 */
export var getManifestAutocompleteService = createSelector([getManifestSearchService], function (searchService) {
  var autocompleteService = searchService && (searchService.getService('http://iiif.io/api/search/0/autocomplete') || searchService.getService('http://iiif.io/api/search/1/autocomplete'));
  return autocompleteService && autocompleteService;
});