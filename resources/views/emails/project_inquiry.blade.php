<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Project Inquiry</title>
</head>

<body style="font-family: sans-serif; background-color: #f4f4f5; padding: 40px 20px;">
    <div
        style="max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">

        <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">New Project Inquiry 🚀</h2>

        <p style="color: #4b5563;">Halo Admin, ada permintaan project baru masuk dari website.</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280; width: 140px;">Nama Klien</td>
                <td style="padding: 12px 0; font-weight: bold; color: #111;">{{ $data['name'] }}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">WhatsApp/Kontak</td>
                <td style="padding: 12px 0; font-weight: bold; color: #111;">
                    <a href="https://wa.me/{{ preg_replace('/[^0-9]/', '', $data['contact']) }}"
                        style="color: #4f46e5; text-decoration: none;">
                        {{ $data['contact'] }}
                    </a>
                </td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; color: #6b7280;">Layanan</td>
                <td style="padding: 12px 0; font-weight: bold; color: #111; text-transform: uppercase;">
                    <span
                        style="background: #e0e7ff; color: #4338ca; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                        {{ $data['service'] }}
                    </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 12px 0; color: #6b7280;">Budget</td>
                <td style="padding: 12px 0; font-weight: bold; color: #16a34a;">
                    {{ $data['budget_label'] }}
                </td>
            </tr>
        </table>

        <div style="margin-top: 30px; text-align: center;">
            <a href="https://wa.me/{{ preg_replace('/[^0-9]/', '', $data['contact']) }}?text=Halo%20{{ urlencode($data['name']) }},%20saya%20dari%20PBM%20Agency..."
                style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Balas via WhatsApp
            </a>
        </div>
    </div>
</body>

</html>
