import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { CollapsibleSection } from '../components/CollapsibleSection';
var enhance = compose(withTranslation());
export default enhance(CollapsibleSection);