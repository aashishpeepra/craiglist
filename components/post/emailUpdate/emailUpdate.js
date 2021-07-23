import styles from "./emailUpdate.module.css";

export default function EmailUpdates(){
    return (
        <div>
            <div className={styles.sect_bg}>
                <h4>Important - Further action is required to complete your request!</h4><br/><br/>
                <h4>You should receive an email shortly </h4> <span>with a link to log in to your craigslist account and publish your posting. </span>
            </div>
            <div className={styles.sect_bg}>
                Email sent to : <span className={styles.sect_bg_email}>aashishpeepra@urlefy.com</span>
            </div>
            <div className={styles.sect_bg}>
                <h4>The link will expire in 30 minutes.</h4><br/><br/>
                <span>If you don&apos;t receive this email, please to continue, or <a href="https://google.com">consult our help pages.</a> </span><br/><br/>
                <span>Your email provider might misfile this mail as spam.</span><h4>Check your spam folders.</h4>
            </div>
        </div>
    )
}