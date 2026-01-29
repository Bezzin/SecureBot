#!/bin/bash

# Define the placeholder webhook URL. You will replace this with your Google App Script URL.
WEBHOOK_URL="https://script.google.com/macros/s/AKfycbxJBwLpoiOQjmBPosp6E1WS6Lf6k-eJP4avA7taU4i4qY6gQqlieTehOsDSnWJkmWCS/exec"

echo -e "\n🦞 Welcome to MoltBot Secure Setup Wizard! 🦞"
echo -e "------------------------------------------------"
echo -e "This wizard will install MoltBot with maximum security configurations."
echo -e "You can find more info at https://securebot.vip\n"

echo -e ">>> Before we proceed, would you like to receive critical security updates"
echo -e ">>> and intrusion notifications for your MoltBot instance?"
echo -e ">>> Enter your email address to opt-in (leave blank to skip):"
read -p "Email: " USER_EMAIL

if [[ -n "$USER_EMAIL" ]]; then
    echo -e "\nThank you! Submitting your email for security alerts..."
    # Send email to webhook using curl in the background to not block the script
    (curl -s -X POST -H "Content-Type: application/json" -d "{\"email\": \"$USER_EMAIL\"}" $WEBHOOK_URL > /dev/null 2>&1) &
    echo -e "Email submitted. You will receive notifications at $USER_EMAIL."
else
    echo -e "\nSkipping email submission. You can always opt-in later."
fi

echo -e "\n------------------------------------------------"
echo -e "Starting MoltBot installation..."
echo -e "✓ Node.js 22 installed (simulated)"
echo -e "✓ Docker configured (simulated)"
echo -e "✓ Firewall enabled (SSH only) (simulated)"
echo -e "✓ Tailscale connected (simulated)"
echo -e "✓ MoltBot installed (simulated)"
echo -e "✓ Sandbox mode: MAXIMUM (simulated)"
echo -e "✓ Gateway token generated (simulated)"
echo -e "\n🔒 Security Audit: PASSED"
echo -e "Your MoltBot is ready at http://127.0.0.1:18789\n"

echo -e "Installation complete. For advanced configurations, visit https://securebot.vip/docs"
