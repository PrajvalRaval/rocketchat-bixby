<p align="center">
  <img  src="https://user-images.githubusercontent.com/41849970/83053891-19082680-a06f-11ea-9dd0-fe9130052089.png">
</p>

<h3 align="center">
  Revolutionising Communication Through Bixby - Powered By Rocket Chat
</h3>

---

## Setting Up The Capsule

1. Fork and Clone this repo.

2. Get started with the [Bixby Studio](https://bixbydevelopers.com/dev/docs/dev-guide/developers/ide).

3. Open this repo in your Bixby IDE.

4. Change the `id` in the `capsule.bxb` file to match your organization namespace. For example, if your namespace is `acme`, change `example.rocketchat` to `acme.rocketchat`

5. In your Rocket Chat server, go to *Three Dot Menu* -> *Administration* -> *OAuth Apps*.

6. Click on *New Application* on top right. Now we need to give it an *Application Name* and a *Redirect URI*.

+ For Application name use "bixbyoauth".

+ For Redirect URI, use `https://<your-capsule-id>.oauth.aibixby.com/auth/external/cb`. 

  + Replace `<your-capsule-id>` with your actual capsule ID, with the `-`(dash) character in place of the `.` (period) character. For example, if your capsule ID is `example.dice`, your redirect URI would be `https://example-dice.oauth.aibixby.com/auth/external/cb`.
  
7. You'll see it automatically generating Client ID, Client Secret, Authorization URL, and Access Token URL. Now copy these from the oauth app page and paste it in `authorization.bxb` file of the capsule.

+ For **client-id, authorize-endpoint and token-endpoint**, simply copy paste the values.

+ For **client-secret-key**, keep the value as `client-secret-key ("key")` and follow this steps:

  + If you haven't already, [create or join a team](https://bixbydevelopers.com/dev/docs/dev-guide/developers/managing-caps.managing-your-team#create-or-join-a-team) on the Bixby Developer Center.

  + Register this capsule as `rocketchat` on the Developer Center.
  
  + In the **Config & Secrets** tab of your capsule's page on the Developer Center, **add a new secret** under Dev:

    + Name: **key** 
    + Value: **Generated Client Secret Value From The OAuth App**
    
  + **Save and apply** the key.
    
8. In Rocket Chat, go to **Administration** -> **OAuth** and on top right click on **Add custom OAuth**.

9. Give an unique name in lower case for the custom oauth. For example enter "bixbyoauthservice". Click on **Send**. Copy and paste this name somewhere safe as we will be using it with our `capsule.properties` file.

10. You will now be provided a few fields some of which will be prefilled. We only need to change a few:

  + Change the **Enable** to **true**.
  
  + In the URL field enter: `https://{ YOUR SERVER URL }/api/v1` 
  
  + Switch **Merge users** to **true**.

  + Click on **Save Changes** on top.
  
11. In Bixby IDE, Go to **resources** -> **base** -> **capsule.properties** file and **add** following values:

    ```
    config.default.server.url={ YOUR SERVER URL }
    config.default.oauth.servicename={ OAUTH SERVICE NAME }
    ```
    
12. Finally We Are Done! You can now use the simulator to run a query. For ex: Open Simulator and ask `send hello to general`.

---

## References & Issues
+ Rocket Chat API [Documentation](https://rocket.chat/docs/developer-guides/rest-api/)
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/bixby), [Bixby Devs Website](https://bixbydevelopers.com/) or [Community](https://support.bixbydevelopers.com/hc/en-us/community/topics).
+ For bugs, please report an issue on on this repository.

---

## Similar Voice Apps

Are you an Alexa or AoG Developer ?. We also have an [Alexa Repository](https://github.com/RocketChat/alexa-rocketchat) and an [AoG Repository](https://github.com/RocketChat/google-action-rocketchat) for you to contribute. Any form of help is appreciated.
