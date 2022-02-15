import React from "react";
import logo from '../../../../assets/images/Logo.png'
import styles from '../../../../assets/scss/componentsStyles/templates/TemplateLetterOne.module.scss'

const TemplateLetterOne = () => {
    return (
        <div>
            <div className={styles.letterContainer}>
                <div className={styles['letterContainer-leftBox']}>
                    <label> John Doe</label>
                    <p> Marketing Manager</p>
                    <div className={styles['letterContainer-leftBox-info']}>
                        <label className={styles['letterContainer-leftBox-info-label']}> Personal Info </label>
                        <div className={styles['letterContainer-leftBox-info-box']}>
                            <span>
                                Email
                            </span>
                            <p>johnDoeExample@gmail.bg</p>
                        </div>
                        <div className={styles['letterContainer-leftBox-info-box']}>
                            <span>
                                Phone
                            </span>
                            <p>+ 359 888 888 999</p>
                        </div>
                        <div className={styles['letterContainer-leftBox-info-box']}>
                            <span>
                                Address
                            </span>
                            <p>
                                MS,MV,Edgertown, st. Strawbarry Lane 22
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles['letterContainer-rightBox']}>
                    <div className={styles['letterContainer-rightBox-address']}>
                        <p>Edgartown , 2022-03-01</p>
                        <p>Jane Smith</p>
                        <p>CEO</p>
                        <p>120 Main Street</p>
                        <p>42018 Marthas Vineyard </p>
                    </div>
                    <div className={styles['letterContainer-rightBox-textSection']}>
                        <p>Dear Ms. Smith, </p>
                        <section className={styles['letterContainer-rightBox-textSection-section']}>
                            <span>As a lifelong enthusiast of XYZ’s marketing initiatives, I was thrilled to see your posting for
                                the position of Digital Marketing Manager. I am positive I can help with XYZ’s upcoming challenges.
                                I have experience with leading successful national online campaigns with budgets over $300,000. What is more,
                                I have succeeded at expanding ABC’s client base by 19% since 2011.</span>
                        </section>
                        <section>
                            In my current position at ABC, I have supervised all phases of our online marketing initiatives,
                            both technical and creative. Last year, my key challenge was to design and optimize nine product websites
                            for ABC’s most strategic products and improve our SEO results as well as enhance the UX. Here we are a year later:
                        </section>
                    </div>
                    <div className={styles['letterContainer-rightBox-textSection-list']}>
                        <ul>
                            <li>
                                Eight of the nine websites I optimized have achieved and secured their spot in the top 3 results on Google.
                                These are organic, non-paid results for 10+ key search terms;
                            </li>
                            <li>
                                The incoming search engine traffic to all nine websites comprises 47% of the total organic traffic for key terms and phrases.
                            </li>
                        </ul>
                    </div>
                    <div className={styles['letterContainer-rightBox-textSection-ps']}>
                        <section> P.S.I would also value the opportunity to show you how my e-detailing
                            solutions grew the combined sales of three ABC flagship products by a record-breaking 13% in one year
                        </section>
                    </div>
                    <div className={styles['letterContainer-rightBox-textSection-last']}>
                        <p> Best Regards,</p>
                        <p>John Doe, Marketing Manager</p>
                    </div>
                    <img src={logo} width={80} height={80}/>
                </div>
            </div>
        </div>
    )
}

export default TemplateLetterOne;