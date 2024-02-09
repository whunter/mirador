import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { LocalePicker } from '../components/LocalePicker';
var enhance = compose(withTranslation());
export default enhance(LocalePicker);