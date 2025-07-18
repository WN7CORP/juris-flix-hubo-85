
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				'xs': '475px',
				'3xl': '1600px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'accent-legal': 'hsl(var(--accent-legal))',
				'success': 'hsl(var(--success))',
				'warning': 'hsl(var(--warning))',
				'info': 'hsl(var(--info))',
				'store': {
					primary: 'hsl(var(--store-primary))',
					secondary: 'hsl(var(--store-secondary))',
					accent: 'hsl(var(--store-accent))'
				},
				'community': {
					primary: 'hsl(var(--community-primary))',
					secondary: 'hsl(var(--community-secondary))',
					accent: 'hsl(var(--community-accent))'
				},
				'premium': {
					primary: 'hsl(var(--premium-primary))',
					secondary: 'hsl(var(--premium-secondary))',
					accent: 'hsl(var(--premium-accent))'
				},
				'footer': {
					bg: 'hsl(var(--footer-bg))',
					border: 'hsl(var(--footer-border))',
					active: 'hsl(var(--footer-active))',
					hover: 'hsl(var(--footer-hover))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)' }
				},
				'store-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
					'50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }
				},
				'community-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' },
					'50%': { boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }
				},
				'premium-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' },
					'50%': { boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-in-up': 'fade-in-up 0.3s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'store-glow': 'store-glow 2s ease-in-out infinite',
				'community-glow': 'community-glow 2s ease-in-out infinite',
				'premium-glow': 'premium-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
