import Box from "../../components/Box";
import { SettingsContainer } from "./styles";

import darkModeImage from '../../assets/dark_mode_wireframe.svg'
import lightModeImage from '../../assets/light_mode_wireframe.svg'

import useTheme from '../../hooks/useTheme'

export default function Settings() {
    const { activeTheme, changeTheme } = useTheme()

    function handleBoxClick(radioButtonId: string) {
        const radioButton = document.getElementById(radioButtonId) as HTMLInputElement;
        if (radioButton) {
            radioButton.checked = true;
        }

        changeTheme(radioButtonId);
        console.log(activeTheme);
    }

    return (
        <SettingsContainer>
            <h1>Settings</h1>

            <Box>
                <h3>Appearance</h3>

                <section>
                    <Box onClick={() => handleBoxClick('defaultMode')}>
                        <div>
                            <img src={darkModeImage} alt="Dark mode" />
                        </div>
                        <div>
                            <label>Default</label>
                            <input type="radio" defaultChecked id="defaultMode" name="mode" />
                        </div>
                    </Box>

                    <Box onClick={() => handleBoxClick('darkMode')}>
                        <div>
                            <img src={darkModeImage} alt="Dark mode" />
                        </div>
                        <div>
                            <label htmlFor="darkMode">Dark mode</label>
                            <input type="radio" id="darkMode" name="mode" />
                        </div>
                    </Box>

                    <Box onClick={() => handleBoxClick('lightMode')}>
                        <div>
                            <img src={lightModeImage} alt="Light mode" />
                        </div>
                        <div>
                            <label htmlFor="lightMode">Light mode</label>
                            <input type="radio" id="lightMode" name="mode" />
                        </div>
                    </Box>
                </section>

            </Box>
        </SettingsContainer>
    )
}