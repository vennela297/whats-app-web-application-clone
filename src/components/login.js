/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import "./login.css";
import {Button}  from "@material-ui/core";
import {auth,provider} from "../firebase";
import {actionTypes} from "../Reducer";

import {useStateValue}  from "./StateProvider";




function login() {

    console.log(useStateValue);

    
    const [{}, dispatch] = useStateValue();


    const signIn = () => {
       auth.signInWithPopup(provider).then(result => 
        {
            dispatch ({
                type:actionTypes.SET_USER,
                user: result.user,
            })
        }
        ).catch(error => alert(error.message));
    }
    return (
        <div className="login">
        <div className="login__container">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAflBMVEX///9Aw1H8/Pz//f87wk0uwEM1wUgxwEU6wkwzwUcqv0D4+/jj9OX4+/n1+vYovz5HxVfs9+1vz3rM7M+d3aTX8NpUyGK35byU2px804ZizG/F6smu4rRnzXPc8t/S7tXH6suD1IyN2Jai3qlQx19bymiI1pF40YKo4K615LrWWHNYAAALmElEQVR4nO2da3OjOgyGDdhgSAKE3Jt7k/Ty///gIUnbTbFkwFiBnuH9sLOzs2A/kRG2JBvGevXq1atXr169evXq1atXa3JBtd0rK4LR/h+cFdj+LmQduL8HaUL3dxjN6f4CY1O6jjPawessoj28LjJapusaIgVelxCp+DpCSIfXCURavPYR6flaJazcR+/hkp+/ep1HrIo2infrzXS1vczPN80v29Vys5jFo6qYHcW7wg3XyyyNoiD0JeeO43z9If0wEFGavS521SC7x+cxd/eR5WjyigQrBw0ikX3s3HLGbuF5LD68pSKUKNuDZBikb4e4lLEzfPnInByl0FhONaUU/DgpG6vd4PPYcBqISqYrGFLI6VCP2D5fPjQnWejXp7vLD7OJp/v5Wubz2HjpmxjvwYzRZaH7BdvEc3O8xNh4P+IiXWis2B4fG0395ng3BfOD5llsh89jizS0g5eLR9mwHSOibQ5fImt4V8nkNcZbezafx07VXul15KfrpxOi5rsEtvGuilYDtMmn8m2iGnOWOvKdyVPzUvDwHKwEDd5VYurB7vRpfGx4tvRuQAgzxNc8i2+dEA3Pb0l/9xxCuJET4fD8VoB402fwvT2BLx+mJ3pC6P6em5G8HVRFr+SEEN9gS+peHiWOoC+l5XMvT+PLn8N30IaUfIO59cmZTuE7pQ0BvtHzxuddwRH6nan4XJY9mS8nBD0NFd/R3tqvsqIpESFw0+lT3n8K4QLqCwXfuhW+fJTOCAjVO3q7pB2+fP00BnypbUAvTonn17jki3VA4H7ZU1+AvxUsbQ9S9W4fLT2Ad0XA0sIqn7fTRs+4DAMhREg2iDmP1VFqkc9lc03f/eS83Bz2s/1nZjeI+CAJzUrtAbIl/ob3ndM4v8bLxdiBbCUFvQ2t8Xk7vN/i+JjCZAsqQu7YG6TqfS7oAE0Wv9MJbEv1HPrAtNsW3yfqQUXRu3kzsulAsrdkQuUusYNZJfhQ/jd7oTIhf7FkQuUmS2yNJDOgSbKnEPIzNvi8MboG9IHn3vVQezdWOrJhQuUWR2yOFnyCK7UT2aIx2FgwoWpAzGvwORxWxC3eWNKCm1Fu8IYZUCA5ILYim5aHFkyo2AN7RfAtkuPy9mQTNidtbEHl+ik24JRX4L9rzmRuBmi0IWCMtuWjBRFsQ+Zm+MUyIP5Wk294PURM52bErPi7NjMgPgvFslu3q9A3S2MBv2sTQM06FwwEfV82o1v+i4FNQHyWxlNd8ZyHLz+aKlDma01GqJti7aAviXubn2QTUmD+22CE4m80nY/JNaILwUXKs0ExQh0fyS+XX9lUYYMxqnTzjDejTpoe5Q3J3Iw6Rs1H6A7vZQkg4brXcWKlMdMRqpmRlAJ+kI1RMTF+CIvXaaL1Jc9g7kfJpmu+Esc3BtSsCkq8qMte6fzo2RSwcJl2PsKBcMyjRoSpKGH6EBavWmhGmX4mkz+ChMluocQPDQG1U2apmYvmy2TKZL76/BsOUa2nV33ZY4OkyUS5sgM40FpB9WUP7U1pq9nOSoMmgN5YH1pRfNm/5hZ0QZmbFC9jNkLXejMkO2SMsj11MjgqNm0EWPaq9sECnes0lDyZr0YTjADReNqXlCfhzjemC91/S50nGgG+l1hCHKAx6r3QV2NIpX7NCLBsPQAu6p9SLmS4YipeUxpXUUN4TwJUM4UmgC6+2v0SlB6kjDf9k5L2MQGsULqVQCac0FcM8bQYOzQBHFdoCEgqP6fmy+hNXx8QTMDoak5siRdn+gaA3rjSs6QmlbVVQ5akLGWMAKuMNB+qqB6h4eK/B+hEgJ9h5H5GSYzQAfK5akGXvREPUhuAlZxMrhBcF+qKEy3IhpOpCuiIPeBJh8Se1AZg1RptDpTn5GteyhkbT228B9m8YnO+EiJxqfdYnI3CasVrKk8qBbhzg3CXjFqKYASYVXYUYDrbo9vHpS7UjADREidFUi3uuO40fKEilEptrBFgjfwQuK+Bbq+oYeS3eE2dwk+w7KnKbkMpgvqLj1ApczQBrFcLIqAgosfKjksIlpP1m1P3pWmYnCh2L64Tvs1fTVAIii21hMGEeYzFn+d675TE6D2vEtZaFMgtvNt2oTkzIfoK/zF3nYo6p5UVpxZmgKVxw98Kofd9fpcdeurFw0YBxtYvlQ83UXOThoBlkd+CAjjU7Q2OsHX4+dEQjE22FU/2MgyLql6m7j6dBKzhzptfS+inEsPfg9pj+21SBdEwcl+j2BcTuNv22n78po4/cVDrw9nsPSpHLP4yxk6G1Q49BOhRPrOXwq8FH8XhseGq9Jwo31qVRe1KCQ7uJ773fO08PoqIS7ohHvXn0BkneIEMYe0lD4eWv9+9WMx/ECUUUf1BHL/qXhoNitWKLVULy/wm9FFCl3mHLLgZh5/BacE/xKGmrj0wfQSBh9Cg4Iyjz+Gt57upFH4glT4WW8ajx8B+lMqAdYrVcGG+9AuRTU4brf1uGqABEzWzXJ1PGaNDo2oCUVJqWeUg5BGa21IS9A0ATYsi4fM1agkHVDPnTQA3ZktWkY2qHxcOCo3pAWWONQBVP2pY8eLPx82MiG5hi8x9KGhC02Sf5BpnWi50wwaQkmwEaJ6v5cm0xqn2Sqcx/914d5bSlPlOsmBrPkyx3epq8rrp7rMmO8mkvzA0IrqLFCivagjoxk0y7lFmZkR0rR0oxb6EOySrSMoNclKoViOkzaZ7zyBAr1ZwTZW47GuPU3TfjBJOswDYeJcOT95LjrJXWsQisjYMCO0zb5qtlf7ruAYifnqUry5CLADmT2HjRJgfVkf02Bbxa1BJhwEg4PYslIX4yWpW6WsxnoseL8ibu1DEhAsb2VoZvCwqfB4kRhM2wEEP1g6UsVPkygP+ttd/HoTNUqwpDlTBm/FBRRO20tFS+G+TGINk8SteuwBVpxoCkviZB0Yn2+wGrEjpsXjj4G8kWx4GBqxQHVuLMYycbLoe3lu7n+fFZq+O7lw2dZbdABD4raxvB+R+ECXp+3Kzng1n69N7oI/ZJ0A00pwPuBfRhs7bl7SECPwSLxZCVY0NAIGVfWtHU14lL7aPpyzeLG716EaCA0YL9/IOnTub0u75ooT7/itIQGFWq3z6wympBWfarALam8kYSL4AeJZP+CU87a5UcAFOQz4FkO4gsXI+cDO0XT6XteZiOAc/pWXZgJQnGJXwhSR8ygg9tWRBnsKfQrPM19o8TaZw2Ni2Ad1BOz7Un8OZ7sZ8HZmniQyOiTfn68Y8LUJOWrDPV2N/gT3xCCnsIwAk36YDyD9jX5K0wNeBeZpYYTUMBHy6Y2Vohq7UnFxKAgivJLgMo3Rep9K6oqJ39CugVvgqzdO4L9JsMxy5h7Pl8Xv9BCgW+rbDp26AKVgwh0u2p9noFrhl7oew+BKRyXKEFyuS8P2ep+VwQTbds4eo9LVc2dJiSkarJ3yGt3jf+GcMSiHnUyCxwIYrg+05irjIds/4kHLhvvdKIC6DJF1OxnDWxGO796Zfw5bJVpvLt8anztNCGSbz4/pqObQDt++ZB+YeNRRHnfUI+VyWpsfF2NVn9W6I8eclMDKjFOmpJMFtj099BHflcD+9mC3Dup+lz8f+ceI+DQ9KflaC+/q/jE1ez1HVrxPlPtlZrUvoLPM1rtT1mLv72DoilHrKHC73yftB+ejoFt+dkcWzj6OTXLNiCieXfigSkU0xn0yJZwfwC5INZuvpMbs4YRJFkRAiihLBz9vVcrG/f6ipwn1s81kD/KFkbhzH4+Futp8Nh+N4MLr+W+Xnutt8D6TfqneZdTwyQCMR4HUKkISvO4A0eDX56H4PIrw6HTb7SVrGq9pd0x+ldbwqnTX/WTqAV9ZT4ws7gqftZ5NrO0Kn6WTDyztCh3TQwi26QQf1zs5dOkJX7Jq9O3WC7Xe3bN+vA2z/+vP37l2jEy13oFevXr169erVq1evXr169erVq9df139+w/ISKrWCrQAAAABJRU5ErkJggg==" />
            <div className="login__text" >
                <h1>Sign in to whatsapp</h1>
            </div>
            <Button type="submit" onClick={signIn} >
                sign in with google
            </Button>
        </div>

            
        </div>
    )
}

export default login;
