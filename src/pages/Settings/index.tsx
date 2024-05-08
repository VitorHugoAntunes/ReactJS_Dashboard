import Box from "../../components/Box";
import { SettingsContainer } from "./styles";

import darkModeImage from '../../assets/dark_mode_wireframe.svg'
import lightModeImage from '../../assets/light_mode_wireframe.svg'

export default function Settings() {
    function handleBoxClick(radioButtonId: string) {
        const radioButton = document.getElementById(radioButtonId) as HTMLInputElement;
        if (radioButton) {
            radioButton.checked = true;
        }
    }

    return (
        <SettingsContainer>
            <h1>Settings</h1>

            <Box>
                <h3>Appearance</h3>

                <section>
                    <Box onClick={() => handleBoxClick('default')}>
                        <div>
                            <img src={darkModeImage} alt="Dark mode" />
                        </div>
                        <div>
                            <label>Default</label>
                            <input type="radio" defaultChecked id="default" name="mode" />
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