import DefaultLayout from '../features/layout/DefaultLayout'
import SettingsList from '../features/settings'

const Settings = () => {
  return (
    <DefaultLayout currentMenu="settings">
      <SettingsList />
    </DefaultLayout>
  )
}

export default Settings